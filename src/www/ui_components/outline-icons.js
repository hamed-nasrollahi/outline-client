/*
  Copyright 2020 The Outline Authors

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="outline-icons" size="24">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.11 86.48">
    <defs>
      <style>.cls-1{fill:#34c38f;}.cls-2{fill:#364174;}</style>
    </defs>  
    <g id="outline">
      <path class="cls-1" d="M 71.107 86.123 L 33.997 86.123 C 33.344 86.143 32.693 86.058 32.067 85.873 C 29.859 84.877 28.787 82.352 29.607 80.073 L 39.697 50.783 L 49.777 21.563 C 50.517 19.003 51.937 16.753 54.587 16.753 L 91.747 16.753 C 94.067 17.923 96.317 22.073 95.897 23.493 L 85.897 52.493 L 75.897 81.493 C 74.617 84.783 73.287 86.263 71.107 86.123 Z"></path>
      <path class="cls-1" d="M 73.597 8.833 C 74.487 8.033 82.327 8.093 83.137 8.973 L 86.907 10.103 C 88.067 10.683 90.617 14.433 90.407 15.103 L 90.627 35.783 C 91.437 36.673 86.007 52.873 85.497 53.343 C 84.847 54.983 74.497 64.613 73.387 64.543 C 72.507 65.353 63.197 65.293 62.387 64.403 L 60.667 63.983 L 48.667 61.043 C 48.245 60.94 47.833 60.799 47.437 60.623 C 46.327 60.153 44.797 57.753 45.187 56.623 L 45.717 37.063 C 44.907 36.173 46.557 29.983 47.717 28.533 L 55.647 15.883 C 56.007 14.603 58.487 12.163 59.817 12.163 L 73.597 8.833 Z"></path>
      <path class="cls-1" d="M 69.397 42.713 L 51.667 23.303 C 50.047 21.533 49.587 20.073 51.947 17.173 L 73.947 0.923 C 75.701 -0.647 78.389 -0.527 79.997 1.193 L 95.207 19.123 C 96.827 20.893 95.967 24.323 94.937 25.253 L 75.537 42.983 C 73.766 44.601 71.019 44.48 69.397 42.713 Z"></path>
      <path class="cls-2" d="M 0.997 53.443 C -1.733 49.443 1.737 48.853 7.397 48.853 L 39.897 48.853 C 44.137 48.853 47.187 50.363 50.297 53.063 L 50.407 53.163 C 50.777 53.478 51.13 53.812 51.467 54.163 L 72.587 80.263 C 73.707 81.543 74.167 82.043 74.587 82.453 C 75.247 83.153 76.017 81.283 76.007 81.333 C 75.997 81.383 76.007 81.423 76.007 81.473 C 75.569 82.735 74.957 83.93 74.187 85.023 C 72.847 86.363 72.737 86.243 68.907 86.243 L 35.997 86.243 C 29.377 86.243 26.997 84.653 24.587 81.753"></path>
    </g>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
