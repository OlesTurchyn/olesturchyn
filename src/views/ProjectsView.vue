<template>
  <div class="research">
    <br />

    <br />
    <a href="https://cartara.ca" target="_blank">
      <h2>Cartara.ca</h2>
    </a>
    <h4>
      Temporal geospatial analysis made simple. A web tool to help compare land
      use changes over time using satellite imagery.
    </h4>
    <small>
      <ul class="point-list">
        <li>Python</li>
        <li>Vue</li>
        <li>STAC API</li>
      </ul>
    </small>

    <br />
    <br />
    <a href="https://kittyclassifier.web.app" target="_blank">
      <h2>Kitty Classifier AI</h2>
    </a>
    <h4>
      Convolutional neural network for classifying cat breeds. Full stack
      machine learning project.
    </h4>
    <small>
      <ul class="point-list">
        <li>Python</li>
        <li>Tensorflow Deep Learning</li>
        <li>ML Ops</li>
      </ul>
    </small>

    <br />
    <br />
    <a href="https://ottawacrimeanalysis.web.app/" target="_blank">
      <h2>Ottawa Geographic Crime Analysis</h2>
    </a>
    <h4>
      Mapping crime patterns in Ottawa using publicly available geospatial data
    </h4>
    <small>
      <ul class="point-list">
        <li>Python</li>
        <li>Vue.js</li>
        <li>Geospatial Data Science</li>
      </ul>
    </small>

    <br />
    <br />
    <a
      href="https://olesturchyn.github.io/RANSAC-Point-Cloud-Plane-Detection/"
      target="_blank"
    >
      <h2>RANSAC Point Cloud Plane Detection</h2>
    </a>
    <h4>
      Java implementation of the Random Sample Consensus (RANSAC) algorithm to
      detect dominant planes within a point cloud.
    </h4>
    <small>
      <ul class="point-list">
        <li>Java</li>
        <li>Machine Vision</li>
        <li>Outlier Detection Algorithm</li>
      </ul>
    </small>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.point-list {
  display: inline-block;
  list-style-type: none;
  padding: 0;
  text-decoration: underline;
}

.point-list li {
  display: inline;
  margin-right: 10px;
}
</style>
