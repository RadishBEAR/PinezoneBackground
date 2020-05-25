// const APIurl = 'http://111.230.173.4:8081';
// const ArticleID = '0';
// const AuthorID='0';

export default{
    getAPIurl()
    {
        return window.localStorage.APIurl;
    },
    setAPIurl(APIurl) {
        window.localStorage.APIurl = APIurl;
    },
    getArticleID() {
        if (window.localStorage.ArticleID)
            return JSON.parse(window.localStorage.ArticleID);
        return null;
    },
    setArticleID(ArticleID) {
        window.localStorage.ArticleID = ArticleID;
    },
    getAuthorID(){
        return window.localStorage.AuthorID;
    },
    setAuthorID(AuthorID){
        window.localStorage.AuthorID = AuthorID;
    }
}
