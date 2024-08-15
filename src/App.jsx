import { Accordion, Carousel, Container, Image } from "react-bootstrap";
import "./App.css";
import a from "./assets/a.jpg";
import b from "./assets/b.jpg";
import c from "./assets/c.jpg";
import d from "./assets/d.jpg";
import e from "./assets/e.jpg";
import f from "./assets/f.jpg";
import g from "./assets/g.jpg";
import h from "./assets/h.jpg";
import i from "./assets/i.jpg";
import j from "./assets/j.jpg";
import k from "./assets/k.jpg";
import l from "./assets/l.jpg";
import m from "./assets/m.jpg";
import n from "./assets/n.jpg";
import o from "./assets/o.jpg";
import p from "./assets/p.jpg";

function App() {
  return (
    <Container vertical align="center" justify="center">
      <h1>
        <Image src={g} roundedCircle width={300} />
      </h1>
      <h1>Minha Princesa</h1>
      <p>Ter você ao meu lado me ensinou diversas coisas...</p>
      <p>
        Mas a principal delas foi o quanto sou capaz de conquistar diversas
        coisas. Hoje, essas coisas que serão nossas
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>💕</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={a} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={b} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <p>Ter você ao meu lado é saber que estamos passando por fases...</p>
      <p>
        Mas que ambos estamos lutando pelo nosso futuro e o futuro da nossa
        família
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>😍</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={c} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={d} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <p>
        Essa família que será extremamente abençoada por Deus, com
        responsabilidade assumida diante a comunidade no nosso casamento
      </p>
      <p>
        Esse amor que que será eterno e terá como pedra fundamental, o amor de
        Deus e nossas amizades, e nossa fé de que Ele olha por nós
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>💍</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={e} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={f} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={h} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <p>Você me inspira todos os dias com tua garra, dedicação, amor...</p>
      <p>
        Esse amor que nunca se apaga, nunca diminiu, apenas aumenta em nossos
        corações dia após dia
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>❤️</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={j} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={i} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <p>
        Ser quem você é, faz que me apaixone novamente todos os dias. (Mesmo
        quando você chega em casa e eu não fiz algo)
      </p>
      <p>
        Todos os dias eu acordo sabendo que tenho do meu lado a pessoa que Deus
        preparou pra mim, e eu tenho certeza que nossa família, terá a mãe mais
        incrível do mundo. (Só que provavelmente vai perder pro pai 😊)
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>👨🏻‍👩🏻‍👧🏻‍👦🏻</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={k} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={l} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <p>
        Continue sendo essa pessoa meiga, acolhedora, de coração enorme, que se
        preocupa com todos
      </p>
      <p>
        Por mais que as provações venham em vários momentos, é importante
        lembrar da tua essência. Uma pessoa, uma prof, cuidadosa, amorosa,
        incrivelmente carinhosa com os seus pares
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>🎉</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={m} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={n} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <p>
        E por fim meu amor, aproveite a vida, viva com amor, intensidade, e
        amorosidade. Por mais que estejamos em uma fase mais "estável", não
        esqueça da Laís conquistadora, desbravadora, guerreira que vive em você
        e irá conquistar o mundo
      </p>
      <p>
        Estarei ao teu lado em todos os momentos, te apoiando, te amando, te
        dando tudo que puder, mas não esqueça, a Laís é uma pessoa incrível! E
        eu tenho sorte por estar com ela
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>🎊</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <Image src={o} height={500} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={p} height={500} />
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default App;
