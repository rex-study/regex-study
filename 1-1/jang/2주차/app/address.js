'use strict';

let regex = /^([ㄱ-힣]+(?:도))?\s*[ㄱ-힣]+(?:시)\s*([ㄱ-힣]+(?:구))?\s*[a-zA-Z0-9ㄱ-힣]+((?:길)|(?:로)|(?:동))(\s*[a-zA-Z0-9ㄱ-힣\-]+)+$/gi;
let result = [];

const address = [
    '서울특별시 구로구 디지털로26길 111 JNK디지털타워 6층',
    '서울특별시 구로구 오류로 36-13',
    '경상북도 포항시 남구 문예로112번길 16',
    '경상북도 안동시 송천1길 145-9',
    '강원도 속초시 동명동 595-2 속초 THE-조은펠리스아파트'
]

const wrongAddress = [
    '서울특별시 구로구 디지털로26길 111 JNK디***지털타워 6층',
    '서뷃울특별시시시시시시시 구로구 오류로 36-----------------13 연지마을',
    '경0상북도 포항시 남구 문예로112번길 16',
    '경상북도 안동시 송천1로이 145-9',
    '강원도 속초시 동명동 595-2 속초 THE-조은펠리스아파트!!!!!!!'
]

address.map(e => {
    result.push({
        'regex': regex.test(e),
        'url': e.match(regex)
    });
});

console.log(result);