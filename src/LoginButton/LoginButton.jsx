import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase'; // Ensure you have Firebase auth setup

const ViewRecipeButton = ({ user, recipe }) => {
  const history = useHistory();

  const handleViewRecipe = async () => {
    // Case 1: If user not logged in
    if (!user) {
      toast.error('Please log in to view the recipe');
      return;
    }

    // Case 2: User logged in and is the creator of this recipe
    if (user.uid === recipe.creatorId) {
      history.push(`/recipes/${recipe._id}`);
      return;
    }

    // Fetch user data (including coins) and recipe details from your backend
    const userId = user.uid;
    let userData;
    let recipeData;
    
    try {
      const [userRes, recipeRes] = await Promise.all([
        fetch(`http://localhost:5000/api/users/${userId}`),
        fetch(`http://localhost:5000/api/recipes/${recipe._id}`)
      ]);

      userData = await userRes.json();
      recipeData = await recipeRes.json();

      // Case 5: User logged in and already purchased the recipe
      if (recipeData.purchased_by.includes(user.email)) {
        history.push(`/recipes/${recipe._id}`);
        return;
      }

      // Case 3: User logged in but does not have enough coins
      if (userData.coins < 10) {
        toast.error('Not enough coins. Please purchase more coins.');
        history.push('/purchase-coins');
        return;
      }

      // Case 4: User logged in and has enough coins
      const confirmPurchase = window.confirm('You are about to spend 10 coins. Do you want to proceed?');
      if (confirmPurchase) {
        // Perform the transaction
        const response = await fetch('http://localhost:5000/api/recipes/purchase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: userData._id,
            recipeId: recipeData._id
          })
        });

        if (response.ok) {
          toast.success('Purchase successful! Redirecting to recipe...');
          history.push(`/recipes/${recipe._id}`);
        } else {
          const result = await response.json();
          toast.error(`Purchase failed: ${result.message}`);
        }
      }
    } catch (error) {
      console.error('Error fetching user or recipe data:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <button onClick={handleViewRecipe}>
        View The Recipe
      </button>
      <ToastContainer />
    </>
  );
};

export default ViewRecipeButton;
