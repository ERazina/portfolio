import React, {useEffect} from 'react';
import { Configuration, OpenAIApi } from "openai";

const OpenAi = () => {

    const key = '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';



    const configuration = new Configuration({
        apiKey: key,
      });

      const openai = new OpenAIApi(configuration);

    // useEffect(async() => {

    //     const completion = await openai.createChatCompletion({
    //         model: "gpt-3.5",
    //         messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: "Hello world"}],
    //       });
    //       console.log(completion.data.choices[0].message);


    //     // axios({
    //     //     method: 'get',
    //     //     url: 'http://bit.ly/2mTM3nY',
    //     //     responseType: 'stream'
    //     //   })
    //     //     .then(function (response) {
    //     //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //     //     });
    // }, [])


  return (
   <div className="resume">


    </div>
  );
}

export default OpenAi;
