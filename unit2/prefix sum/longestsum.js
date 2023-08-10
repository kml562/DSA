function maxLen(arr, n) {
    let map = new Map();
    let maxlen = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum === 0) {
            maxlen = i + 1;
        }
        let rem = sum;
        if (map.has(rem)) {
            let len = i - map.get(rem);
            maxlen = Math.max(len, maxlen);
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxlen;
}