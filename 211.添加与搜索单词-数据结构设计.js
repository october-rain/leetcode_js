/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.items = new Map()
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    // let len = word.length
    // if (this.items.has(len)) {
    //     this.items.get(len).push(word)
    // } else {
    //     this.items.set(len, [word])
    // }
    this.items.set(word, word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    // let len = word.length
    // if (!this.items.has(len)) return false
    // if (!word.includes(".")) return this.items.get(len).includes(word)
    // const reg = new RegExp(word)
    // return this.items.get(len).some((item) => reg.test(item))
    if (!word.includes(".")) return this.items.has(word)
    const reg = new RegExp(word)
    return this.items.values().some((item) => reg.test(item))
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
