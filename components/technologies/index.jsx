import Title from '../title'
import Tags from './tags'
import Cards from './cards'
import cards from './cards.json'
import TechnologiesCard from './technologiesCard'
import { useState } from 'react'

export default function Technologies() {
    const defaultTag = 'Todas'
    const [tag, setTag] = useState(defaultTag)

    return (
        <section className="z-10 min-h-screen py-12">
            <Title>
                Tecnologias
            </Title>
            <Tags onClick={setTag} />
            <Cards>
                {cards
                    .filter((card) => tag === defaultTag || card.tag.includes(tag)) //(|| === OU) sempre deve conter a função .includes porque ele faz referência ao valor de um array json -> por padrão sempre irá mostar todos ou a tag selecionada
                    .map(
                        (card) => 
                            <TechnologiesCard key={card.id} srcImage={card.image} tag={card.tag} altImage={card.name}>
                                {card.name}
                            </TechnologiesCard>
                )}
            </Cards>
        </section>
    ) 
}