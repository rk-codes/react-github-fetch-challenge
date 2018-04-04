export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const fetchReposRequest = () => ({
    type: FETCH_REPOS_REQUEST
});

export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const fetchReposSuccess = repos => ({
    type: FETCH_REPOS_SUCCESS,
    repos
});

export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
export const fetchReposError = error => ({
    type: FETCH_REPOS_ERROR,
    error
});

export const fetchRepos = () => (dispatch) => {
    dispatch(fetchReposRequest());
    return fetch("https://api.github.com/users/dhh/repos", {
        method: 'GET',
        header: {
            "content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchReposSuccess(data)))
    .catch(err => dispatch(fetchReposError(err)))
}
