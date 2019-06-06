const axios = require('axios');


exports.handler  = function(event, context, callback){
    const url = 'https://opentdb.com/api.php?amount=10';

    // send repsonse
    const send = body => {
        callback(null, {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify(body)
          });
    }

    const getdata = ()=> {
        axios.get(url)
        .then(res => send(res.data))
        .catch(err => send(err))
    }

    if(event.httpMethod == 'GET'){
        getdata();
    }
    
}

