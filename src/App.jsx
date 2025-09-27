import React from "react";
import { ArticleList } from "./ArticleList/ArticleList.jsx";
import api from "./api/api.js";
import style from "./App.module.scss";

class App extends React.Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = await api.fetchArticlesWithQuery("react");
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        {error && <p className={style.error}>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p className={style.loading}>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default App;
