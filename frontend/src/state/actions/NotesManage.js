let host = process.env.REACT_APP_API_HOST;
let todos = [];

export const add_Note = (title, Description, tags) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://notiabackendbhai.vercel.app/api/notes/addNote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: title,
            Description: Description,
            tags: tags,
          }),
        }
      );
      const data = await response.json();

      await dispatch({
        type: "ADD_NOTE",
        payload: data,
      });
    } catch (error) {
      console.error("Error:", error);

      // Handle error if needed
      // You can dispatch an error action here if required

      await dispatch({
        type: "ADD_NOTE_ERROR",
        payload: error,
      });
    }
  };
};
export const get_Note = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://notiabackendbhai.vercel.app/api/notes/fetchNote`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      todos = data;
      await dispatch({
        type: "GET_NOTES",
        payload: data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
export const delete_Note = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://notiabackendbhai.vercel.app/api/notes/deleteNote/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const data = response.json();

      todos = todos.filter((note) => note._id !== id);

      await dispatch({
        type: "Delete_NOTES",
        payload: todos,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
export const update_Note = (id, title, Description, tags) => {
  return async (dispatch) => {
    console.log(id, title, Description, tags);
    try {
      const response = await fetch(
        `https://notiabackendbhai.vercel.app/api/Notes/updateNote/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, Description, tags }),
        }
      );

      const data = await response.json();
      console.log(data);
      todos = todos.map((element) => {
        if (element._id === id) {
          return {
            ...element,
            title,
            Description,
            tags,
          };
        }
        return element;
      });

      dispatch({
        type: "Update_NOTES",
        payload: todos,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
