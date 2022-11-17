export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
};
const wrapPromise = (promise) => {
  // Set initial status
  let status = "pending";
  // Store results
  let results;
  // Wait for promise
  let suspender = promise.then(
    (res) => {
      status = "success";
      results = res;
    },
    (err) => {
      status = "error";
      results = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw results;
      } else if (status === "success") {
        return results;
      }
    },
  };
};
