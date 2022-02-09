import React from "react";

/**
 * Displays information about the team.
 */
const AgifyResult = ({ agifyData }) => {
  const ageData = agifyData;

  return (
    <div>
      <p>I predict that you, { ageData.name }, are { ageData.age } years old.</p>
      <p>
        This guess was acquired using the <a href="https://agify.io/">Agify API</a>
      </p>
    </div>
  );
};

export default AgifyResult;