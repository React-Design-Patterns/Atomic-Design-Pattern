import { storiesOf } from "@storybook/react";
import DetailTemplate from ".";
import Back from "../../atoms/Back";
import Description from "../../molecules/Description";
import Element from "../../molecules/Element";
import AtomicModel from "../../organisms/AtomicModel";
import Header from "../../organisms/Header";

storiesOf("DetailTemplate", module)
  .add("Hydrogen", () => (
    <DetailTemplate
      header={<Header />}
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
      atomicModel={<AtomicModel symbol="H" level={1} />}
      description={
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eos
          molestias beatae officia, eius distinctio ipsum! Velit inventore
          dignissimos, eveniet, voluptates saepe modi commodi sint illum
          laboriosam vero totam ut atque similique officiis voluptas nisi fugiat
          facilis officia porro! Rem, cumque fuga similique cum assumenda sunt.
          Quis dolore illum quidem ad et magni inventore laboriosam cum voluptas
          blanditiis, temporibus laborum adipisci voluptate. Labore quisquam quo
          eaque voluptatum. Dolore natus perferendis minima a repellat quo, esse
          porro eius amet hic iure molestiae error et cum? Aut assumenda,
          doloribus amet obcaecati aspernatur, laudantium dolorem nisi odio
          facilis nam mollitia ut eveniet? Quo?
        </Description>
      }
    />
  ))
  .add("Oganesson", () => (
    <DetailTemplate
      header={<Header />}
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
      atomicModel={<AtomicModel symbol="Og" level={7} />}
      description={
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eos
          molestias beatae officia, eius distinctio ipsum! Velit inventore
          dignissimos, eveniet, voluptates saepe modi commodi sint illum
          laboriosam vero totam ut atque similique officiis voluptas nisi fugiat
          facilis officia porro! Rem, cumque fuga similique cum assumenda sunt.
          Quis dolore illum quidem ad et magni inventore laboriosam cum voluptas
          blanditiis, temporibus laborum adipisci voluptate. Labore quisquam quo
          eaque voluptatum. Dolore natus perferendis minima a repellat quo, esse
          porro eius amet hic iure molestiae error et cum? Aut assumenda,
          doloribus amet obcaecati aspernatur, laudantium dolorem nisi odio
          facilis nam mollitia ut eveniet? Quo?
        </Description>
      }
    />
  ));
