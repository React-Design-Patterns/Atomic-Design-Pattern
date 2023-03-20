import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import DetailTemplate from ".";
import Back from "../../atoms/Back";
import Description from "../../molecules/Description";
import Element from "../../molecules/Element";
import AtomicModel from "../../organisms/AtomicModel";
import Header from "../../organisms/Header";

storiesOf("DetailTemplate", module)
  .add("Hydrogen", () => (
    <BrowserRouter>
      <DetailTemplate
        header={<Header>Hydrogen</Header>}
        back={<Back />}
        element={
          <Element
            atomicNumber={1}
            atomicWeight={1.008}
            fullName="Hydrogen"
            isCard
          >
            H
          </Element>
        }
        atomicModel={<AtomicModel shells={[1]} symbol="H" period={1} />}
        description={
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eos
            molestias beatae officia, eius distinctio ipsum! Velit inventore
            dignissimos, eveniet, voluptates saepe modi commodi sint illum
            laboriosam vero totam ut atque similique officiis voluptas nisi
            fugiat facilis officia porro! Rem, cumque fuga similique cum
            assumenda sunt. Quis dolore illum quidem ad et magni inventore
            laboriosam cum voluptas blanditiis, temporibus laborum adipisci
            voluptate. Labore quisquam quo eaque voluptatum. Dolore natus
            perferendis minima a repellat quo, esse porro eius amet hic iure
            molestiae error et cum? Aut assumenda, doloribus amet obcaecati
            aspernatur, laudantium dolorem nisi odio facilis nam mollitia ut
            eveniet? Quo?
          </Description>
        }
      />
    </BrowserRouter>
  ))
  .add("Oganesson", () => (
    <BrowserRouter>
      <DetailTemplate
        header={<Header>Oganesson</Header>}
        back={<Back />}
        element={
          <Element
            atomicNumber={118}
            atomicWeight={294}
            fullName="Oganesson"
            isCard
          >
            Og
          </Element>
        }
        atomicModel={
          <AtomicModel
            shells={[2, 8, 18, 32, 32, 18, 8]}
            symbol="Og"
            period={7}
          />
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eos
            molestias beatae officia, eius distinctio ipsum! Velit inventore
            dignissimos, eveniet, voluptates saepe modi commodi sint illum
            laboriosam vero totam ut atque similique officiis voluptas nisi
            fugiat facilis officia porro! Rem, cumque fuga similique cum
            assumenda sunt. Quis dolore illum quidem ad et magni inventore
            laboriosam cum voluptas blanditiis, temporibus laborum adipisci
            voluptate. Labore quisquam quo eaque voluptatum. Dolore natus
            perferendis minima a repellat quo, esse porro eius amet hic iure
            molestiae error et cum? Aut assumenda, doloribus amet obcaecati
            aspernatur, laudantium dolorem nisi odio facilis nam mollitia ut
            eveniet? Quo?
          </Description>
        }
      />
    </BrowserRouter>
  ));
