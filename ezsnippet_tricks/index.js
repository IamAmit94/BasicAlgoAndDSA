const cron = require('node-cron');

cron.schedule('*/5 * * * * *', () =>{
    console.log('will execute after 5 sec')
})


// */5 * * * * *

/**
 * min
 * hour
 * day
 * month
 * year
 */
