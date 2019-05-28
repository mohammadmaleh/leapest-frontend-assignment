import instructors from "../constatns/instructors";

export const fetchInstructorsAPI = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(instructors);
  }, 200);
});
export const postOffer = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(true);
  }, 200);
});
