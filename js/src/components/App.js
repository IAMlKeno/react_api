import React from "react";
import ArticleBlock from './ArticleBlock';
import Agify from "./agify/AgifyBlock";

/**
 * Loads the app.
 *
 * @return {*}
 * @constructor
 */
const App = () => (
  <div>
    <p>
      The sections below are examples of calling out to APIs
      to display some data to you!
    </p>

    <h4>Article Block</h4>
    <p>
      This block leverages Drupal's JSON:API to grab
      the articles available to it.
    </p>
    <ArticleBlock />
    <hr />
    <h4>Agify Block</h4>
    <p>
      This block accepts a name and sends the data over
      to the Agify API in order to guess your age.
    </p>
    <Agify />
  </div>

);

export default App;