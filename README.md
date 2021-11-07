# Objective

Delete a challenge: created with a POST-request, by decoding using Libsodium crypto_secretbox_open_easy() function, and decode using base64 original variant. The delete request should contain base64 encrypted data, using 'plaintext' as a property.
<br><br>

# Preriquest for utulisation

You need to have ``Node.js`` installed.

Download here : https://nodejs.org/en/download/

<hr>

Once ``Node.js installed`` you can ``run`` the following command(inside your ``terminal`` in this project directory)

>`npm i`

>> `npm i ` : will install all node modules required for this application

Once `npm i` is executed you can continue with the next step: " Starting app.js"

# Start app.js 

App.js contains the entire code for this task.

To run app.js execute the following command:

> `node app.js`

>> This will start the application (app.js).
Notice the output in your terminal!


If everything went correctly, you should see something like this in your terminal:

       {
            kid: '2375477988',
            key: 'CKQ0aE9JVsyXvTElB3J2HPi5iuCJuePehDynpFkjbb0=',
            challenge: 'qNSubSUe/ZmnfHjXhny3+zs3WfpC1UC0cwfXt+rLPxBJSwpxRuV1bz4/ZkAM6nUg7y5uuBLJH/RX7zaQYrcqnKug0AEhODy2shlneXHdeI7yKoFJriJJBzZvhSgVD9JjDvPJPBvSu7QbTAKQM56NqwhZq2hhSBqTMTsl7GZoni7L/blre3/uF162vEEgoKvB',
            nonce: 'j7bmW+WaJlSbvYpl/V2KcihRnzw3kExz'
        }
        Succesfully deleted: challenge with kid=2375477988 
        Status: 204



# Details about installation and packages (node_modules)

You can find more information in the ``nodeJS.md`` file.

# Code explanation 

I tried to document my code using inline comments, if you are interested please check the app.js file.

If you have any questions, feel free to contact me.
