/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let lovers = 0, i;
    for(i = 0; i < preferences.length; i++) {
        let triangle = [], h = 0, j = i + 1;
        while(h < 3) {
            triangle.push(j);
            j = preferences[j - 1];
            h++;
        }
        let trueTriangle = triangle.filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e));
        if(trueTriangle.length === 3 && triangle[0] === j) lovers +=1;
    }
    return lovers / 3;
};
