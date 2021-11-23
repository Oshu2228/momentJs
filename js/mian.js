(() => {
  'use strict';

  // const input = document.querySelector('input');
  // const button = document.querySelector('button');
  // const p = document.querySelector('p');

  // button.addEventListener('click', () => {
  //   // const d = new Date(input.value);
  //   // p.textContent = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  //   const d = moment(input.value);
  //   p.textContent = d.isValid() ? d.format('LL') : '無効な日付です。';
  // });

  // const d = moment();
  // const d = moment('2018-01-01');
  // const d = moment('01-10-2018','MM-DD-YYYY');
  // const d = moment(new Date(2018, 0, 10));
  // const d = moment([2018,0,10]);


  // const d = moment('2018-01-10');
  // // January 10th wednesday
  // d.locale('en');
  // console.log(d.format('MMMM Do, dddd'));

  // const d = moment('2018-01-10 15:35:24');
  // 15:35:24
  // console.log(d.format('HH:mm:ss'));
  // console.log(d.format('hh:mm:ss a'));

  // d.locale('en');
  // console.log(d.format('l'));
  // console.log(d.format('ll'));
  // console.log(d.format('lll'));
  // console.log(d.format('llll'));
  // console.log(d.format('L'));
  // console.log(d.format('LL'));
  // console.log(d.format('LLL'));
  // console.log(d.format('LLLL'));

  // console.log(moment('2018-01').daysInMonth());
  // console.log(moment('2018-02').daysInMonth());
  // console.log(d.toArray());
  // console.log(d.toObject());
  // console.log(d.format('[Today]:L'));

  // console.log(d.get('year'));
  // console.log(d.get('month')); // 0-11
  // console.log(d.get('date'));
  // console.log(d.get('day')); // 0-6
  // console.log(d.get('hour')); 
  // console.log(d.get('minute')); 
  // console.log(d.get('second')); 
  // console.log(d.get('millisecond')); 
  
  // console.log(d.get('y'));
  // console.log(d.get('M')); // 0-11
  // console.log(d.get('D'));
  // console.log(d.get('d')); // 0-6
  // console.log(d.get('h')); 
  // console.log(d.get('m')); 
  // console.log(d.get('s')); 
  // console.log(d.get('ms')); 
  // console.log(d.year());
  // console.log(d.month());
  // console.log(d.date());
  
  // d.set('year', 2020);
  // d.month(11);
  // d.hour(1).minute(1)
  // 2020年12月10日 木曜日 01:01
  // d.day('土曜日');
  // d.month('3月');
  // d.locale('en');
  // d.month('March');
  // console.log(d.format('LLLL'));
  
  // console.log(d.set('year',2020).format('LLLL'));
  // console.log(d.get('year'));
  // console.log(d.clone().set('year',2020).format('LLLL'));
  // console.log(d.get('year'));
  
  // const d = moment('2018-01-10 15:35:24');
  // console.log(d.clone().subtract(3, 'year').format('LLLL'));
  // console.log(d.clone().add(1, 'y').add(2, 'M').format('LLLL'));
  // console.log(d.clone().add({y: 1, M:2}).format('LLLL'));

  // const start = moment('2018-01-10 08:00:00');
  // const end = moment('2018-01-10 10:30:00');
  // // console.log(end.diff(start));
  // // console.log(end.diff(start, 'hour'));
  // console.log(end.diff(start, 'hour', true));
  // const posted = moment ('2021-11-23 11:00:00');
  // console.log(posted.fromNow());

  // const d = moment('2018-02-30');
  // console.log(d.isValid());
  // const d1 = moment('2018-01-01');
  // const d2 = moment('2019-01-22');
  // const d3 = moment('2021-12-01');
  // // console.log(d1.isBefore(d2)); // true
  // // console.log(d1.isAfter(d2)); // false
  // // console.log(d1.isSame(d2)); // false
  // // console.log(d2.isBetween(d1, d3)); // true
  // console.log(d2.isLeapYear()); // false(閏年の判定)

  const button = document.querySelector('button');
  const p = document.querySelector('p');

  function getResult(){
    const bday = moment(document.querySelector('input').value);

    if(!bday.isValid()){
      return '日付が無効です!'
    }
    const now = moment();
    const age = now.diff(bday, 'year');
    const days = now.diff(bday, 'day');

    /**
     * now: 2021-11-23
     * 
     * bday: 2000-11-22 -> this:2021-11-22 -> next: 2022-11-22 -> 364
     * bday: 2000-11-23 -> this:2021-11-23 -> next: 2022-11-23 -> 365
     * bday: 2000-11-24 -> this:2021-11-24 -> next: 2021-11-24 -> 1
     */

    // 今年の誕生日を定義
    const thisBirthday = bday.clone().year(now.year());
    // 今日以降の日にち選択を無効
    if(thisBirthday > now){
      return '日付が無効です'
    }
    // 次にくる誕生日
    let nextBirthday;

    // 誕生日が来年か今年かの条件分岐
    if(now.isSameOrAfter(thisBirthday)){
      nextBirthday = thisBirthday.clone().add(1, 'year');
    }else{
      nextBirthday = thisBirthday;
    }
    // console.log(nextBirthday.diff(now, 'day', true));
    // Math.ceilで小数点切り上げ
    const left = Math.ceil(nextBirthday.diff(now, 'day', true));
    // LL -> September 4, 1986
    return `今、${age}歳です!生まれてから${days}日経ちました!次の誕生日は${nextBirthday.format('LL')}で、あと${left}日です。`
  }

  button.addEventListener('click', () => {
    p.textContent = getResult();
  });


})();