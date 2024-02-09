import TechnologiesTags from './technologiesTags'
import tags from './tags.json'

export default function Tags({ onClick }) {
    const TechnologiesTagsOnClick = (tagName) => {
        onClick(tagName)
    }

    return (
        <div className="flex items-center flex-wrap justify-center">
            {tags.map(
                (tag) => 
                    <TechnologiesTags key={tag.id} onClick={ () => TechnologiesTagsOnClick(tag.tagName) }>
                        {tag.tagName}
                    </TechnologiesTags>
            )}
        </div>
    )
}