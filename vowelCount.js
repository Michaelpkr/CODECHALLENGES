function getCount(str) {
    vowelCount = (str.match(/[aeiou]/g).length) - 1
    return vowelCount
}