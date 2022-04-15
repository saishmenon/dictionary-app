import { InputContext } from '../App';
import speaker from '../assets/icons/speaker.svg';
import { useContext } from 'react';

function ResultList() {

  const { inputValue } = useContext(InputContext);

  return (
      <div className='flex flex-col justify-center items-center'>
        
        <div className='w-96'>
          <div className='flex'>
          <button className='mr-3'><img src={ speaker } alt='speaker icon'/></button>
          <h1 className="text-4xl">{ inputValue }</h1>   
          </div>

          <div className='mt-6'>
            <h1 className='font-bold uppercase mb-3'>Definitions <span className='text-gray-400'>5</span></h1>
            <ol className='list-decimal list-inside'>
              <li>
                <p>
                  Used as a greeting when you meet somebody, in an email, when you answer the phone or when you want to attract somebody&rsquo;s attention
                </p>
              </li>
            </ol>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold uppercase mb-3'>Synonyms <span className='text-gray-400'>5</span></h1>
            <ol>
              <li><a href="#">greeting</a></li>
              <li><a href="#">salutation</a></li>
              <li><a href="#">salute</a></li>
              <li><a href="#">welcome</a></li>
              <li><a href="#">...</a></li>
            </ol>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold uppercase mb-3'>Antonyms <span className='text-gray-400'>4</span></h1>
            <ol>
              <li><a href="#">bon voyage</a></li>
              <li><a href="#">farewell</a></li>
              <li><a href="#">Godspeed</a></li>
              <li><a href="#">good-bye</a></li>
            </ol>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold uppercase mb-3'>Examples <span className='text-gray-400'>3</span></h1>
            <ol className='list-decimal list-inside'>
              <li>hello, what's all this then?</li>
              <li>Hello below!” he cried</li>
              <li>Hello! Did you even get what the play was about?</li>
            </ol>
          </div>

        </div>

      </div>
  )
}

export default ResultList;