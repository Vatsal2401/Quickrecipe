import React from "react";

const Chefs = () => {
  return (
    <div className="container my-3">
      <div className="container d-flex align-items-center justify-content-center my-3">
        <h1>Chefs</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <a href="https://www.sanjeevkapoor.com/" target="_blank">
              <img
                src="https://www.sanjeevkapoor.com/images/Chef_Sanjeev_Kapoor1.jpg"
                className="card-img-top"style={{"height":308+"px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sanjeevkapoor</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <a href="http://www.ranveerbrar.com/" target="_blank">
              {" "}
              <img
                src="https://ranveerbrar.com/wp-content/uploads/2020/12/Image-about-me-ranveer-brar.png"
                className="card-img-top"style={{"height":308+"px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Ranveerbrar</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <a href="https://www.chefkunalkapur.com/" target="_blank">
              <img
                src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/KK_Pointing-removebg-preview.png"
                className="card-img-top"style={{"height":308+"px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ChefKunalkapur</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <a href="https://www.vineetbhatia.com/" target="_blank">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgZGBgYHBgaGhgYHBwaGhwaGhgYGBgcIS4lHCErHxgaJjgmKy8xNTU1GiU7QDs0Py40NTQBDAwMEA8QHxISHjQrJSwxNDQxNDQ0NDQ0PTQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0ND00NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABBEAACAQIEAwUFBQcDBAIDAAABAgADEQQSITEFQVEGImFxgRMykaGxUmLB0fAHFEJyguHxI5KyFRYzwiSiNFNz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAQQBBAEEAwAAAAAAAAABAhEDBBIhMUETIjJhUQUUcYGRscH/2gAMAwEAAhEDEQA/AN5ljWSWikayShsmVSkjZZbZJG6RACcWINb3jC2OEFkd6MCbD7SaR4ZdJLliAYZA+4lorIHXUecAJSJcpbSmwgLj3aDI2SmQWHvHcL4ecaVhJh3E4pEe7uqjqxA+sA8W7b0qXdQGo3hYL/u5+kxXEMW1Ry7EuepOgH66ShWNxmYfw2Gl7jwv6yxRFZqa37Qn5Il+nebXzBkmB/aFU1D0wTyynL8b3mFLnkdIhp7xF+nTzj2oVnrXCu21F2yuGQ3AuQCLk294cvGHsJVV2JU3HUazwlK5Bup2+vWek/s4xDMr5mvtz2Ot9IpKhpm0w3vmXRKeGHfMvgSIxERTtogICZLO2nV2jo0xIbaOAnQI5VjsKOKsnRJxBJ0EaAZ7OKTxR0IGERpWSNGGUFjREyyN1k0awgIE8QSCWHehriMEMO8IICbCrvLGWMwi7yxlgBCUlTGggXG94QKyti17otveCGkZTjfaYoCio3tLHewA+9fnMG1fOxudBq5PNj/k/CWO0GLZ6rMSxYmwAsBbl9IV4D2WeooZ106bXPUyxyjFWwjCU3SANZy9lW4X6+f5TtSnZPkNNT1Nv1pNpiezAUaXG21jKJ7Pt94+n95D1olv7aSZjFQ9LnqZFXXbr+uXKbb/ALdvvE/A0XlD1oj/AGsjCEEeNh/maHsVxz93xAZiQjDK43sOTDyNvS8v4jg6EEAa9ZnHwppvlO19NJZGalwVzxOPJ9AYFgxuNjzhELMf+zTE58Kv3GZPgbj5ETZ2kSAzLOSQicAgBIFjgs6IoCoUeojVjoCJFkqGQqY8GSTBkuaKRXik7EVjGRxMbM5NuxjCMYR0a0AB/EBpA7N3hDWOFxB5w99Y0A7AneWWEZQS0kvEySGwfxqvkpO/NQSB48vnCRlHjGHD0nH3G+kF2NnnfZnhPtsQMwJVe+frb4z1KlhAoAAAgDsVhVRXbqQB/KAD+PymnZ5Vm5fJswLbHgp16EqVaAl6oZXc3G0z0bU3XIKrUvCUMSkJ1DqYMxZ8I0KXQIxA1MA8Yw+bXpv5c4axDawdiFuDNEHTMeVWmjQ/smxWV6tHkQKi+YOV/qnwnqE8Z7FVjSxtI8mzIf6gQPmFnsl5ezA1Q6NtFedDQAlUaRWnROwAa0dOGcgJj1MeDI45TJIEPzRRt4oBRWjWnbxplQzkaxjjGNAAdxWvkXNAQ4+vSGOOrdDMYyaySGkHU4+nQxPx9OhgFgOUciXhRIN/9eSNfjCOCmt2GX1On4wGU1naKd5f5h9YUAf4JTKIfMn5mGVa4g3Bvmz8iD6jz+EHcR4+tEkDvHT9aSiUXKTo2wnGME2aCuZXR9SvO15kD22LGwQE/Dw5fSEuHcUzMCdND9JCWNxL8eWMuEEKlO5gjiDAHyljF8RyZrc1NiD48pg+I46o5IXMb872APO15KENxDNl28UEMXjUuLMPiJAXveAHwbk3zC/TML/IC8t4JnDWe/4S5wSXDMiyNvlFl3ZXRlJBBvpvfUi3wnp2D7Ul0By8vpoZ5wFBYMdhb4k2H1M1HBcKSgI21+pji/BXOKpy+zTf9wMf4fpLOG4q7EabmBqeBN4Rwad4DbWToqNYh0E6TGIdBHRAKKcigJnVMdGTt4CQ6KNvFHZIrxRXjS0rA60aZwtGM0AKHGR3DMY02XF27hmMdtZJEl0NyR9rRjPHKCNYxjpGr2IN7EG/kRtIhigTaT08KW1Alc5xj26DnwaTDVSyCqbd9LHzQkXt8TMVxXBonerm92bLqQLbklRqeQA5kza8LW2HtbVXOnhckm3rO1+HIxuVDWGl7fjoJWp10a1DcjzfHo6OiGiilwpC2s1m2JAUgeWY7wvwVz7XIy5SDlPO3l1EKcTwTMRZDcaAlwQB4cwJNwTgxRs7tduQGoH94SkmiyGKSlYN7Y4cUwoQm2gJ9Zm8NhM6uWYpYHJYX15Xym6jy1+k23a3D5kGmx+ImZ4fQDaHkd9jCEqVjywt0BDwxgpuzZid7sRboFb/ADLdPCNbvHXymkXhyKb5b+ZJlHEoATG52VvCooFulka/K3x5fOafsrxFFplHNmDbeBCn63mcrU7ox+8o+BvN12N4BQfDGo6Al3fU9BZdOmoMndclDVxr7LdLiFK5swljDV1ZgQRvIcNwTDKGNs3S+unhM12cqH2rLqFzmwPS+kssoaXg9QTYTsbT2HlFeAhxMZFeKBFjrzsZOsdIAjmeKUfbxQJEpaMLRuacLSDAcWjWaMLRpaAFPih7hmIc96bbiPuGYmvoY10BHiX08YzDYshSGjMZ7pMHKzEb2mrDh3qzLqNR6TVlym/fvNBhOKIFsd5k1Rgb3iqITzkdR+mwzKpFMP1Ha+Eehdn8WtV3QHdQbeF7X9Lj4w1RsQLzzHgeLahWSovI2I6qdCP10npWJbIx9bfhrzmTNpVp0oro62h1Szp/lEPEHRAWPLW0ocBxDVCzt7uayr4W3+P0kHEqb1TkGgsSzdFG5/XhLSIFRMhyi1l6kjW3wN5Uo3yjoSyRjwx3aGmMmaeeYohXzA2N+W9uf4TR8U4o7Xp5SzC6/dNtj4XmZpYVgxYkFjqfLw9L2tppJxg/JRkzRpVyF6GMNsrfHrIMRUB9YqLg5VIuLctxbof16SwcNlJzehtp4QcaYespIgwWGVyENxmYbWuOXPS8VHFPh0NnZlYr3SbAZrbDbnIMbxE4YGoFJKsoCnS5J1Pwv8JC2I/eUR6eoLi6mwZcthtz2G0uijHklyeg4Yn2Raw92Z7hH/lB6sfrDqBhRIvplgDhDf6i/wAxlj6KonptNu6PKdkaHQeUdeQGx0UZedDQFQ4TrbHyjbzj7HygNIE3inLRQGT5o1mjS0azSL6AcWjS0aTGlogK3Ej3G8phP3hSTc85usdqhmYThyXvlvrJADqiIw3j6XDgRpCjcLuLBbTlWmuHTM7BRy6nyG5lsMsoqkU5MMZv3IpLwsyOvw8ILswUdTYfMwdj+1DWOSyr9oi5PkNhM9iMa7nM7M3iTf8AxJ7pPth6cV0gzWxtNLhLufgPjPSOzXGExdBTdS6DI6jcELZTbfULp6zxPE18oPU6Ca/9mpNNXqbh2CkX3Vd/mT8JHIt6plmJLHK4npWPyUKTa957AdQB1+R1mOocQqOcuQKisbM175e9Zco27tpr1yViQTmtY631vt47i1ozFcNRAQBddRt6keJ2+HhM/wAeDVGpu2zKV6NUEsCne3IBJudbjWwtYQDiabu5BcDQ7ADzAOpGvjNZieDqdkta+7G1hcbdb/SQ0eHZiAABtprqSQfIRbi1xVcIz2A4ay7N/uufHT9Eawo2KYAAuddBoBsevpyhWpSCKBz9640023mI4rjyzsi+7cj10B+lo1fkplV0gZ2qxeYKoNxmJ8zufwi7P1iqafaaCeMvdwv2R8z/AIEP9nMPakrHnmI+J/KXLozy+RLx/H1FRGDupuV7rMum9jYynw/tHVpsGBV7G9nF/mLGd7VNpTHix+FvzmfUxiPX+E/tOpNZa9JkO2ZDnXzK6MPS823DeKUcQuajURxzynUfzLuvqJ83K0t4TEujB0dkYbMpKkeoicUFn0jFPMOzn7R2UhMWMy7e1Ud4fzoPe8118DPSsNiUdA6OrowuGU3B8jINUOyYRVNj5RIYqvunygME5opV9pOQAsZpwmMLxrPEA8tGlpGzyMtEkAsS3dMoK5A0EsV9jK9LaNguyXE4oImdtABc/lPOePcVeuxZttMq8lF/1czUdpKmZVplsi3zNzJt7oA6bnU9N5jeM4MorEEkba2BuO8NjqCAbeRkoyinV8jlGVXXALxlUWt+jFRfQ+BErYt7hD92So1l85aVkOMa7T0TsklqCDwJ+JJnnWJHeHlPS+ztPLTReir9JFjQMxPaOrhse5Q3XKgdORARTYdD4z1PhfEUxVJHUixFyvjaxFt+o9J4LxWvnxdVuRdh6DQfITWdi+IsFekGyupzofA6Oo9Rf+qRnwrJ4uZUelYgdwkg6nQc7FlGp82v6wa7gAajQBmJ3IYaD/cDBeL4/VVLMgOls17c7nT0HwmXx3GMRU7twnLQEG3S5OkpuJo9/Rf7TcZsPZoe8dL72HMnxOsyiCwv+rydMIx3Op9T6ynxfuJa+p7o/Exp3whSjtVsBYh87s3U/wBhNrwVbUKf8oPx1mJKz0DhVD/Rp6fwL9BLn0Zl2ZztU3fQdEJ+J/tAqiF+0y/65HRFH1P4waico0JnUSTKLC8cqfrwkGfMc2yjQeMYiRnPhDHZntPWwrgocyE9+mScreI+y3j8bwGRGwA+ksLiVdFdTdXVWB8GFx8jLDvdT5TzzsNxh3wqU7/+MlL/AHfeX4KwHpNipKodb6SpkkCs8Uo+2nIDC94ghPKX/Z26TiOOokZSUScMcpvgqrhWMRwvjJK+HW97WtzBN/lKP7+6nUZkBsftAdQRvaQWVeS2WmkuVyWjhRbWU8S601Zrbf4EKqysuZSCDzEB8fqsgphR772Y/ZQKxzejZZY37WyhLmjNLQ9tVTMXN3HtMiEtlvsn609IP7dYinmyoCt390giwVSCLnUlcwUzZ8L7WU6ZZ6qorKuUVO6oAvqCqmzEixFtdQOenmXbTjIxNXOgsid1Bsclzdm+8zEsfPwlWKFyUvwTlJpNGbrHRR0zD5/3kyHaRVzf4k/GxklAzWUFilTzug6sB6bn5T0jBuEUn7I+QExHAKOauDyVS3rsPxmq4i5Wg5+6R/u7o+sXkkujz1nJqEnmfrCfC8SUdHBsVNr/AC/XnBLe/wCsuURq69TcRvlUKLppnpNSqtWlmA1tqB1lbB4AOQSp1trAPBeLhRlc2+hmwwGKVUzXGUfxXH6EwSi1wdOEoyVg3iWHVO6i6kzAcYrZ6mUG4W4vyvzmg7UdpFYlKJuTozjYDmFPPzmTRNB94gfmZowwaVsy6jIm9sRVBYnwX6/5nqnCsPakgt/Av0nl7C4fxIAnuNLDKAotsAJezKeSdoSP3iq3IMB8FA/CUKNOwufM+Al7tCb4ioNv9VyfJWMpYg90D7X/ABG8BDXOYWGl/ksjXX+UaCdqdNh/EfognCLj7Kjl+cAQ13vtt1jRHMem05AZu/2aVdaqeKOP/sD9BPS6oJUgdJ5P+zd//kuOtJvkyT1kNK5dkkZ/9xedmgv4RRDJC9zKuNpgi1hY8jznK6XBJ8gID/629B8tYZqR0V9SyH732l8dxMjds6cYqKpEtfFVqFt6iHdSbuo6o38Xkfjyk2A4jRrKTTYHkynRlPRlOoktRA9mWxU6g3uLdQZl+N8LNN/b0dG/iG2aJfZMNPiWoPdCMrbqdj46bGZft1jM6IQ7B2JJS9gqraym24JJ3/CHcHSeuQUp1GUBTd0KhtBe19NybDoJm+3aFGpo6ZSVLi9tibWty1U79JfhvckzNqFBxbXZi3cEX9CJCW1sdR9R084+ql9Rv9Zb4PwZ8QxVbKo1Z22W29up8PmJsfBzlyUCmgG5uQOd+lhzmk4J2KxNWzPaiu931a3gg29SJsOznBaKBvYFC62BrVQTckXOUgaAAbDqN4Yr8KQAMztWVvdLEIARuPZ7b366WmbNqIwTdX9Ls0Y8Epv8fbIuzvZjA4cF3dqjG2YlwVAHgmw8yYWevw6sCqJTdV1ZMt9joSrWa17ai8zb4glit7C/dI27v8JWP7M9mlbEe3Ib2al0YXsGLKQQp3sFY/ATPp9Z6r2tUzTn0forddog7T9mcFUs1BVpsBr7MlQb7XRrg+hmA4lwt6DBj3kPdzDk3Rh/Cfl4z0XjeKVGKUwSisxvoQVBFlLc+7c3HhAHFbHK6WZKtqbg7a3ymx6EHUbWmuMmzNOMaMY7iQValxa5t56TuJQo7If4SR8Oshcy2jOhmaWge8v3VJ9TKqrrJs2reixDJ8tlXxYEz3I1Bb0nh1fYDx/Ceq/9RHs0Ya5kVviAYAked9p1tiqoHNv+bBvxg3NmckbAAD84R7TMXxGYbsoHqpIufT6SolMKLCADLDz+g9Y1hff9fnJGkLwAYTFFFADW/s3X/wCSx6Um+bJPWBPMP2Zp/qVW6Ki38yxP/GemyuXZJD4oyKIZRfiaB/Z1CEubIx0Bv/Dfkfzi4hhkdCrDTad43wtKqFWFmHoQfWA/3t6SZSDkGl7khQOYJuR5H4zGjrf6B9PE1MGxCAvSvql7sPFL/SGXx6VUzo1wd/DwboYNxNEe0IZ0cEAhkcMtmsVa45EQSMelLE5rZ6ZAVwP4hzZT9oaEeVtjJJWQclHldGu7M8aaiwRwTRY6Ej3CTa4J/h6j1Hjhe3/FBicXUYe6h9klvs0yQT6sWPqJ6DiuC2oNVWojURTZw4uSyBSwstrX5bzxxiWa1x3jYE7XY85qwpq7MOpcW04/2XuA8D9sWdzkop7z8yfsJ1P5zW8PQVm9mFyUEsxUaZuShiOZI9LHnrJeMcNZEp0qSt7NFtpc3fmxsNSfxMK4LhzGiAlNhdQWAVhrpe5O533mPW55JVFO3wi/R4ISlcmkSI6qpCAKDqbAAXvuet4POMHs3Uasrd2w10GptzIIIk74c5WV2VRzUEO1hyIBsCd9TB1RwqsUW2UG5Niw8hpOZjwSb97/AMnXnOEI+1X/AB0d4dTb3qhyra5GxJ3PkDL9XirMgp0hkQchufU/SBw/u52J0zXFibnkZZRdLKQL31IHObktqqK78mOT3NSk/wCF4Rc4bhf3hnDNZER2J8Qug+P0lmnwK+GQPbPlBRV3YHVf6rm0I8KppkFNXUJYvVfTMeirr5/GM4txYFrIMotlT7otbO1tmI28PSbcfsjRinH1clnlvavgGJSvVqPSOVqjNmUqwsedlJI9RMy5nsua4A1P63Mw/bHgwU+2Qfzgf8rfX4ycM18Mhm0zgrRk6c6rf8oxWlnC4JmF9FW/vNoPTmfSaFzwjG5KPLO1W09RNVgMeRhkzaZbqCdLqD3SBz0NvSB8NTp09cuY9W29F2Hrecx2Mzc9ZYsaStmeWZye2C/sZicQGa4HrzMhzSEGdDSpu2aIqlRIxkLmdLRhiJCiiigB6N+zjD5aLv8Abew8kAH1Jm6LzO9msJ7LD0kIs2XM38zEsfm0PXlT7JIfmnZFeKAzScR4YKo94q1rZhqP6hzmPeiUDqyhmBYA+Wlj4XE315mOM0ctZujgMPO1m+YvKpxS5NGmyyvbZ5/isAtgLbC2gt/iC8RhRaa7iFE3OggPE0TK0zTKJSXtBVp4OrhBqjkFTfVBe7qOoaw8rnrMdiKgtNPi6EB4nhqsbglT8R8JphOlTMeTG7tGz/Z12rxb1P3dqy5FpswLIpfulQAG5731voJrMRiqlRnRmd1ANyCFUX2uBp6Tx/DcJxKOHo6sNQyMAfgbfDWars/2pajTenjFqBi5YOUbW4AKmw8PnI5U5Lh/0W6aUIv3Kn+QiS4YU0tcnbmee8Zi6LopTqb26eA5n1lbC9oaXtFemysbnuk5WNwQRY6yzjOI52uVI8NJmWFRd0bXljLyU7Pa669dbHwjkd7bf266Ti4gfGOFUXk3EqqI96j6d/ucwun609YTKKFtsDqDy879YJSoL+sspiwotmvbl+XhE1ZOMowC/CFDkE62Gvn+hJe0XD1amx5hTp1FtRM3huLmlVzKl1OjDYEdR4wrj+MmquVFKg7lrfQQpol6kJxaZ5zV4aKWpGYcmOw6XHXz0nGqk7max8ICLHUETN8S4Uy3Kaj7PMeXWbcWdPhnFz6WV2imzylWJvr5TntiD9RE7Ztbby6UuCjHBxY5WnQYxFj7SovOxRTggB2XeCYYVMRSQ7M638h3iPUC3rKRh/shg3bE03CNkUsS9iF91gLE6HUjaJgenI2olvNBpps/dUEk6ADeaLgnZ/J36jFm5Je6jz6mVkwfr0imxsOg+AigA+CO0WHzIHG6H5Hf52hbNG1FDAqRcEWI8DvIyVqghLbJMwWLW4vy5QFiV1M0+Lw5Rmpnlqp6jr9IBxNEgzOuDpp7lYEr0riCsTRtrNDUWD8RSk4sqlGwfhMSabBhtzH1mm/eQ6hgbgi8zbpFw/ElCU5HUfiINXyKLrhhLG5Oar8BNj+z/gaNQerURWFVrIrAECmmlwDtdr+gEwrK1R0RPedlQebGwnt2Bwy06aU191EVB5KLS2PRnzS5pAh+yWEN70R6O4t5d7SYLtlwgYR0yAmm4upYm4Ye8pYb7gjz8J60Zm+3eAFXBuf4qdqi/wBPvD/aTLMajuSaMuWc9jcXyeVHFHkLet4qVWxvv5yuuhiqtOjHFCKdI5OTUZcjTb66NPh8IlVA6D06EbidfDZYE4JxP2LG4urWv4eIH62myIV1DCxBFweo8JydRieOX14PRaPURzQ+12v+gJgNpWq0NYQxNEgyAAc5ns2OILxHB0f3kBPXn8YIr9nVvcFgvQWNvGx3mxQCJ6Ak1kkit4Yy8GQHZKqwDU3RwepKH4WP1kTdlcUDb2d/J0/Oa1SabZh7p94dPvQvSq935xvNJEf20H+TzxOyuJO6Kv8AM4/9by9huyX/AOypfwQf+zflNdXqSuG08JL1ZMj6EEwWvC6FK1kF7gXPebXTQnabLBYB3sFFlGmbkB4TJYCmMRiVQ/8AjQ3P3iBewnpWGygWG3SXKNRV9mOUrm66XCLvDsElMd0XPNjuZelBHX9EydLW0v8AEwuhk94pHp1b4zkVgSe0nDUkEUKIFDjtDModfeXfxX+34mZrFUwwmzZb6cpl8fQyOU5bg+B2lGSPO42aadrazNYhNZRq6wxjKcEVRa8UTTIp1lgjEaMpHI/r6QxUEGYlNfWWR7M8jVdgcJ7TFq592kpf+pgUQfNj/TPVs8zHYzg5w+HGYWdznccxp3UPkPmTNDaWJUjLKVsmzSjxo3w9UH7DfSTkwL2oxWWkFB1drb8hqfwlmFXNL7Mupltwyf0zybiCZGZeh+R2kuAwIe12YEki4W6iwv3jLXGqN7MBc7EDXyM5wTFBCwZWHukEqbeOvwm3UNxTpnP0SU2ty48k/wD2/wBKo9VI+hlnDNVwvvjPRJsWS7BCeZFrrfx08b72kxqdT/tb8peo4xT1tsQUYgjpqJillcltlyjrx08IS3QdMVazDMNQRe4532g+pS8Y+rWdHIVGdDqWuFy9AqnU+Ow0j3UEXv8AnMk4OJ0oZVJfZEgP0kzKdpymv+ZOZUXIqVV0IPSV+H17Zkv7v0Oo/L0lquwt4waBaoCOYIP4fjGJ8Mu12lKq5Zcqnfc9BJMRVABvIMI5Oh0vtbn4eEuxRt8mXUT2qkEOFUsjoRyI/vNtTPKZfg9DM4v/AA6/lNVTFpfJmKKos0/OSmqBKjVPjOE6SJMf+9nrFKmTz+MUCVByKKKSZUKAu0nvU/JvqIopTP4l2n+ZnsZ7v66wHiIopWjeytU/GQYH/wDIo/8A9af/ADWKKWR7M+To9Vxe3rAOM5xRS4xASvKJ3+MUUnDsryfE7IhuIopLILEEKHOXaXvTkUqLyw0pU9vQfSdikcnxLcPyFh9pJX2iimRnQXRUrSofeEUUYSKvEPdMiwO/w+sUU0Y+jBqOzYcD3f8Ap/GaJYopJlKGRwiigNdnIoooEz//2Q=="
                className="card-img-top"
                style={{"height":308+"px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vineetbhatia</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <a href="https://maunikagowardhan.co.uk/" target="_blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGauBrNy5C1HFdqJgP0w7j-bsNwmCOky4C0g&usqp=CAU"
                className="card-img-top"style={{"height":308+"px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Maunikagowardhan</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <a href="https://www.tarladalal.com/" target="_blank">
              <img
                src="https://www.tarladalal.com/images/tdhm.png"
                className="card-img-top"style={{"height":308+"px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Taradalal</h5>
              </div>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Chefs;
