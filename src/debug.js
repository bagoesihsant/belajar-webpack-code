import _ from 'lodash';

console.log('This message is meant to be a debug message.');

const debugObjects = [
    { nama: 'Bagoes Ihsan Taufiqurrahman', age: 26 },
    { nama: 'Dodhy Kurnia Rahmantyo', age: 26 },
    { nama: 'Alfian Rochmatul Irman', age: 26 },
    { nama: 'Rofiq Hidayatullah', age: 26 }
];

console.log(_.find(debugObjects, (obj) => obj.nama == 'Bagoes Ihsan Taufiqurrahman'));