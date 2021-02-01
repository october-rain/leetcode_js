let arr = [2, 4, 6, 1, 3, 7, 5]
// let arr = [1, 2, 3, 4, 5, 6, 7]
// * 冒泡
function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let flag = false
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                // const temp = arr[i]
                // arr[i] = arr[j]
                // arr[j] = temp
                ;[arr[i], arr[j]] = [arr[j], arr[i]]
                flag = true
            }
        }
        if (!flag) return arr
    }
    return arr
}
// console.log(bubbleSort(arr))

// * 选择
function selectSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let min = i
        for (let j = i; j < len; j++) {
            if (arr[min] > arr[j]) min = j
        }
        if (min != i) [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr
}
// console.log(selectSort(arr))

// * 插入排序
function insertSort(arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        let j = i
        let temp = arr[i]
        while (j && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
// console.log(insertSort(arr))

// * 归并排序
function mergeSort(arr) {
    let len = arr.length
    if (len <= 1) return arr
    let mid = Math.floor(len / 2)
    let leftArr = mergeSort(arr.slice(0, mid)) // ! slice 是左闭右开
    let rightArr = mergeSort(arr.slice(mid, len))
    arr = mergeArr(leftArr, rightArr)
    return arr
}

function mergeArr(arr1, arr2) {
    let i = arr1.length
    let j = arr2.length
    let last = i + j - 1
    while (i > 0 && j > 0) {
        if (arr1[i - 1] > arr2[j - 1]) {
            arr1[last] = arr1[i - 1]
            i--
            last--
        } else {
            arr1[last] = arr2[j - 1]
            j--
            last--
        }
    }
    if (j > 0) {
        j--
        arr1[last] = arr2[j]
        last--
    }
    return arr1
}
// let array = mergeArr([1, 8], [2, 3, 5])
// console.log(array)
// console.log(mergeSort(arr))

// * 快速排序
function quickSort(arr) {
    let len = arr.length
    if (len <= 1) return arr
    const mid = Math.floor(len / 2)
    const pivotValue = arr[mid]
    let left = []
    let right = []
    for (let i = 0; i < len; i++) {
        if (i === mid) continue // ! 这一句可以让 138行 不写成 const pivotValue = arr.splice(mid, 1)[0]
        if (arr[i] < pivotValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    // ! 不能写成 quickSort(left) + [pivotValue] + quickSort(right)， 这样的返回值为字符串
    return quickSort(left).concat([pivotValue], quickSort(right))
}
console.log(quickSort(arr))
