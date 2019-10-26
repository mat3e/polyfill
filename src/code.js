const arr = [1, 2, 'foo', null, 2, null];
alert(arr);

const set = new Set(arr);
alert(set);

set.add(1).add(7.7).add('bar');
alert(set.size);

set.forEach(val => alert(val));

const intSet = new Set([...set].filter(Number.isInteger));
alert(intSet);
