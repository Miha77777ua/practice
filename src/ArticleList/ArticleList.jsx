import React from "react";
import style from "./ArticleList.module.scss";

export class ArticleList extends React.Component {
  render() {
    return (
      <ul className={style.list}>
        {this.props.articles.map(({ objectID, url, title }) => (
          <li key={objectID} className={style.item}>
            <a href={url} target="_blank" rel="noreferrer noopener" className={style.link}>
              <p className={style.text}>{title}</p>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
