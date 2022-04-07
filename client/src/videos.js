import React,{useState} from 'react';
import './videos.css';
import ReactPlayer from 'react-player';


function Videopage(){

    const[videoUrl,setvideoUrl]=useState('https://www.youtube.com/watch?v=dtKx1joyT2M');

    function Card({Name,ImageUrl, VideoUrl}) {
        return( 
          <div className='card-container' onClick={()=>setvideoUrl(VideoUrl)}>
            <div className='image-container'>
              <img src={ImageUrl} alt=''/>
            </div>
            <div className='name'><h4>{Name}</h4></div> 
          </div>
        );
      }

    return(
        <div>
            <div className='mainvideo'>
                <ReactPlayer controls 
                width='800px' height='400px' 
                url={videoUrl}
                onError={()=>console.log('Error loading Video')}/> 
            </div>
            <div className='videoList'>
                <Card Name='Plasma donation in India' ImageUrl='https://www.iconninja.com/files/601/197/250/social-media-video-network-youtube-play-icon.svg' VideoUrl='https://www.youtube.com/watch?v=fIlC_K2TtFQ' />
                <Card Name='Incentives for Plasma donation!' ImageUrl='data:image/png;base64,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' VideoUrl='https://www.youtube.com/watch?v=7kUhgrdmLfY' />
                <Card Name='Plasma Donation: What to expect?' ImageUrl='https://media.istockphoto.com/vectors/worried-person-icon-vector-id1250594989' VideoUrl= 'https://www.youtube.com/watch?v=cXiwW2zeoaA' />
                <Card Name='Why donate Plasma for Covid-19?' ImageUrl='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABcVBMVEVFs5w9oIz////V1tvch0T81GI6VWo+ppsvSFnlY1Pa2N41non2w1iKubFEsZo+sZkwrpXfhkLOQS06UGjjikOoxsabwb8ypJg9pI4lmYMoRln/2GLl8/D2+/rjhT5Pt6G23tXmXErH5d6AyLheu6cbRFqX0cOi1srr9vQsoZArTmoiSmrU3OKFyrrb7+p1xLJ7YVI7dng8iIHiwmPsyWP/xFKksXRRqJax3NKllmnUhEXOiky1d0qZbU5zmXnFi1FcVlWwj146Wmxsc2jwwlq7zMxbqZp5s6jPOCDPTTvdop9dqY2LnnhvpoedmW6+jlhmqYu9e0mRaU9TU1aqc0s9TFeZnHOekme5eUlVVFZBlIuEZFE+fH47bHRqW1M7ZXF6mHdWZWl/f2jTuGS+qGXFrmRmb2lafnGSs3y8wnZtuZPLxW/bymuEvYyOr36xtndzh39bl4yhaluMpqDYjorQdW3UxcfTrq3jcmbgi4PZvb5a9JtkAAAPoUlEQVR4nNXdC3fTyBUAYNnOg0TEY2ODX7GdKPIrjuMlJLWT7EITmgcbIMCSsGSBsJvddrfdttvt8uqv70iyrNdIM5LvSOKenlNq+1B93DtzZ8ayLSS5R7W9Lg1bzV5flut1QRDqdVnu95qtobTervL/vxd4/uXt9WFTrqNMBikhmEN9BD9Rl5vD9TbPi+AlbEutvkYTvEOD9lsSLyYPYXupV1dwFJvVmcnUe0s8lNDCqtSU/eEsTLkpQQ9NUGFVWkGZYLqxMoNWJMhrghROzuOChBIuNmF4Y2RzEejKYIRLMiBPR8pLINcGIGy36D0hmBG1AKadiYWLPfD0mZG9iYt1QuHiCkefZuxPaJxIuNjn7NOMKxMZJxC2eefPMPYnWOwEFlabIfk0YzPwnBNUuMRl+vQwoqC9I5hwvZ4J1adEpr4enrAZvk81NkMSSkK4BWoEEqQwhL1oEqhFpsdduF6PKoFaIN+j0aewFWUCtci0OAqrcvRATJR99UY/wvWQe6BbIOSnUn0IY1ChevipVHZhPz5ATOyDC6tyPCpUD8Q8GBmFizEZgkYgxLinYhNKcapQPTISnHApjkBMZNpusAiH8QRi4hBGGKMuYQ+WrkEXxhjIRKQKYw1kIdKEsR2DelDHIkUY01nUHLQZ1Vv4GQCpRE/h+ucAxETPrYaXcPHzAGKi1wLOQ1iN+sJ9hMcy3EMYs92EVyA5iLD/+QAx0X2/6CqMeae3h3vndxPGcr/kFa4Tqouw+jmVqBbIZbZxEX5Gs4webrMNWdiMBIgQOnn0EMfdk3SAC0DkN26IwijWMgg92t6tjWN3+5Hvv4I8FIlCDgBKoPTjqVo2OzWObLY2tX3iN5OswpWwaxSlt2u1KUdka3sn/v4e0jtTBGHojQI9NGfPajz39a9NOn4jCMPOYPqUkD89avfSvv4yFmHY8+jJlEsC9QH5yMcFEeZThzDsefSJrULzOKyP1PzMqs751CGsc7MQ44mlQvNTT58/e/bVlzv5wMQ6TRjyuUXa4tv54lqj0Sjj/7x5ajZmfUypjjMNuzDk+4B2TQWZ/7JRvjaKcuMrEzG742O6sa9PbcJwpxm0barR/LeNa6awEvfYr8s+2ViF7XBr9MQ8CHfK1yzReGoZiuxZzLQ9hOGuZtA9c41+UR7V56hWy382J3G3w0xEK+7CkA/XHllSqNVo+Zvnz7/RiI0dcxLvJpiJ1qM3izDcoxl0ak7hV6qwfIbb4dSZJvzWvBK/12EmWg9tzMKQU2gZhfk3auIaz3Fp5p8ZfzaSeJJgJlqSaBaGnMJzi/DMqMxRPq3C7IsOM9GSRJMw5BRa5hlLjCYdS5Uqc02CmWhOoknYC7fbp912FLjza/3C+nAtkWAmmjeKhjDkXmidSc3Apw1ny1eEd0V2oqknGsJWyLumc7Iwv9twtkO1TB932LOIWgRhyClE28RhmB0tbcpnjmf2NCEj0SlcCjmFaI880ZyVNeCO/Yns6UjIRDRu7R8Lwz4DtvR7o0a1tlj+hpDde7qQhWicD+vC0N8NJQqz2v6i/JL03O5YyEIcNwxdGPopN7FK9dWMo0RtQgbieBOlC0M/xifONFqvL7/MO58yjUNGolUY/ptp6Nxd+IYo3DML6UT97HQkDP2YWxDuEvqhp/CxRUgl6ttEIaIitW0tdOGbhhL2Zq/GaE3jg2gWRvGOLyJNJztaEJ6ZyibsQSGOylSIqkhdWn5e2R+SnjC1Q0biqEyFqIqUvPTOf3nWaLx8SmqH504hjWgI4Yt0MHtxQXsNoUyz6pFpmdQPa04fjaiVqQDf7tMb+7lc7nWxKKRxeAgfO1KVf6kt2r5zTDW2XsFE1Jq+KpQhga9yuZmZmVxx4/X+DJbuX77euCBeR9qZqbzLzkk5MCUCvYmyLoTc+6YvFR8O/b8xdgYjnVdCOsXIj870HQ3RLYXeRHUfLABvnAzYOF5fFItFx5VYTvTHwi8IZ1Cq0M3nSVS3UAJsr7hwAnEScxhpv5K3xC3+zlmjXHZ2/NpD1xR6EdXjGkUI+JbhJQGoIi+x0XwlpBWNSvzuzXfODLrXqDexrgkhhyEphSPjRjFheuGO61Gi/S1gZd8kegLdicpAFAC7IW4TrkBMvG1kkbzBd4nsLsXnTlQ6ogDXDS9m3DNoJY6Pu7PZWs01mz6AbkSlIwpgJzSvvX2jQlWvRFuvZZV7u94mOqRJ1YjaqfcY9CQqpzUC1DEioU04ifhKBOXN+yxO3s7ew0RHufrOW/f7TbK1x2xAF2JGEcJMNPQMKnFZVIi7tZ3T85PO+NI7ib0a+fC0du8JK5BMxFONADPRbDAB1TpNPHzxKNGxXnjnyanTmK3tvmX3kYl4qhFATvPTbMCZmf2imjNndE62d2vZ8d1DuIqze3d9+YhENMRCiBXNK1ahmkRydDpPzk93FVx2auf08V3iP4RfIl7VCCAbC68+aI1LV6GKVKr3RP2Dfx6RKGMhALDImkKcxItglx6YmBSqABPNeL292l2lCV95JRGemKkKEG9Y6DPp6vb0dteZz9Xu/fur+sP7nIU2YmZRgGgWGzltIN6pTFfu3LfkMbfa3d/erFQ2748ezXEG2ogZSYC4GXEjp0ymXQzEUbnz4vtud1WJbnf/h+07Fe3hHzSix2zKg4gkYQjQLBIXuE5XX6gSBVOZvvoRx09Xm9MV/cHpyvea8DZ3oZmIhgLI2/fp27mZ7ua0KSpKTFseueqq7YL7QLQQUUuA2TvhKv3eCnJG5b6awtv8gSYiagowd9G8yhlF6ir8SRmJoQANIuoJfQggnmtWf6QJp6e74QxDC7EvwJwGb+S6V1Rg5a85/h3fTpSBhBe57h268MUq91WbgygLMEeJWLhJF/64GkLDtxGhhAkW4TTuF557Cx5EqMPgNEuVTt/phjcMdSLYcfc+i3CzG2aRjohQxsvuFb1bbK6+DjWFCcgsbnQZ+uFmN2QfjjqUcNClrmmw8G9hpzCRGAD1Q1ym9+nC6Z8DHr/EQjhYpQMrJ6EDE4dA61IchV+oSfw1/BSKh0B7CyX+Tt1c/CkC4RHQ/lAJRFvVVMKfZxLiAsweX4ufKUn8R/gpTIhNkHOaUSBKCp+ED0yIQ5CzNj2855oI5hksXAI5Lx2HlzCSFCZKEsiZ9zi8khjFKMTCRZD3LcbhMRKj6PaKsAry3pMR/3RLYiWCBZsaQO8fjgP96kKMZJrBE80A6D1gU7jkMBKfsqQBeh/fFOS1WzSDEAtbUPdiGIFIQ9HHPSOwUVLuxQD/TJeDuHkSFRA3C7h7ooxAWzZhBFuKsRDyvjYjtq5fN/mub0UoPAS9N9Es1I3Kn65HJxSbsPeXWoSmiE5YksDvEVYCxUjYBr/PW4mODbj1r+jGIfy9+kI6PTs7+IsF+O/CbEQ+vKIB/rwFShdnlTATFSCOaIRLsJ+ZQehwdhQGceuXgv6YSLvjHjxKbcDPPSGUXkjdLNiJWz/pDxVupRbCNg7gPruGMvLN+fl5Qzg70IBX40cKt+bnUwuJMI2i8dm1CTsiQkcH+PJTZqGaRRNQEeJXzN8ahGcsGZ8/nOgzpAgtpPDFp2xCnMWtK9P/VIWK8eZhKSSkCPE5YJSp3xr57MLZwVXBKVSMB0ehDEi1V0z6We6MrJYnUVi4+O0/BYJQeeHBUYm/sGT+LHewMkV1s88qLMz+fnx8/PtsgSRUjPzHozjxdyogOWW+aLOwUPjv8fGNGzeOb/xWIApxrR5yJo6KdJLvxZCtPkNYKByl5hUgJv5xcFggCfGrORNL1u/FCFCmKGWPkbCAe0dq7Z1KPH6PH1VL1SFMpbgC9SIN/v00aMFxxaqwMHugPvFBFT5Yww+nFgok4fxNnkkU7d9P4/s8yplCRViYvalPPlqRrmnzylGBkMP5Q47Ckv07hnyf1jhGoSo0muPapwcPHtx4b3qKkHOOSTxM2oU+t1BoxSlMHZgm17Wvl+fm5tbGGvykM/gJS87v+vI51xCGoTXW3mHg8nvP13AsUzHpFPo73UfOorPFnCL8n7dwgVcSRdJ37vnbB6ObFOF7pUiXv17zes38LV7CEul7E/199yUiDStTaMNw+ZO3kNdUo69nbEJfDYPQLKzCT0qVzn30FKYOOC3AS+TvL/X1HbSINtGowLllyj8EH6E5hYG/R7jOMgzpkykXoCWFgb8LmtDwLSn8MBJ+8BZyWX1bUhj0+7yJDd8s/DQSUibTIx7Ckvv3ebNvE2kNf+2jNg7nKJMpj3ZhTWHQ79WnNfzRMDSv24hCHu2i5PW9+sybKFrD/6ALKZMph3Yhev42AvPvrVEa/tofY6H3uo3D2lv0/n0L1t8oyXhf93gY4snUu+eDA41NhYuQ9c1Eb6ExDJf/8B6I0LsLcWAHBfytIFrDf8dYpeDtokT/rSC2yYbS8FOpj8tMRQq9f7JPM0Qhy82KqE8TakRKw+fQLggc50MMZ6fUHX5K3QFTBqESB6BC/YyUImTYKNJ3+Apx+R0VCLu7EFcImmC/f0jd4Svx/iP9Nal50BwSMaQHqfMpOphniDWWFwG2C+c86iqkzqeotwAVAzigj98hpZ8PIyQCBRjQ2es9hfT1aRrs0oDCvh6lCBlaRsyI5EHoIWT4Xe5YEUu+f5eb5dAmRkTbvp5NyPBuVGyIbrMMRciwG44N0WWWoQhZjt7iQbQervkQsqzB40AkrbcZhSxnGtETHecWfoTJYfyJFCBNyNAWIyaWhhQBTRh3onunZxbGm0gHMgjjPBapJcomjO+MSptkmIVxJXr3QV9ClmPi0Imi6LZfCiJMLqK4LcNF0Wup5l+YrMZspyEOPBbbgYR4vxinLXGpT79g38I47foZ2mAQYVKiDsZwiKIo+bhqP8JkmzoYwyCWBm36pQYUMlQqf6KfCg0gTK4LlDRyJooJti4YXJhM9ihp5Eos9egXOLEwKVHSyI8oJiT/lxtAmEw2M55GTkTR5a0XHsLkouxZqlyIpQHjMg1EiLcbnqUKTxRFlp0SpJBSqsDEgAU6oTDZXvEwQhLF0oqvHg8mxMOx724EI4qlo2ADEELoaYQhTuqbWIiNrrUKQMT1OaEPQIjHYwuRNx0TEsWS2Jpg/AEKcSzJxEROQhRLh0H7gzVghLhYm4iADErE6WtOXJ6jgBLikFacyCBEzFuR4C4LUJhMVp1In0RR5bEeMjEFqFAJqYnHJApExLxBU4K+IHAhjvZSr54ZM5mIGFcqriwBTJ2O4CFUoo1ziTQmhajgRLkp8dApwUuoRlsa9mQBZUr2O9jEhPoIphUHvSE3nBpchVpUF9elYavZ68vyYFAsFgeDgdzvNVtDaX0RdE4hx/8Bc0JmB29KBuoAAAAASUVORK5CYII=' VideoUrl= 'https://www.youtube.com/watch?v=dtKx1joyT2M'/>

            </div>
        </div>
    );
}

export default Videopage;