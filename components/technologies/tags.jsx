import TechnologiesTags from './technologiesTags'

export default function Tags({ allTags, frontEndTag, backEndTag, superSetTag, libraryTag, frameworkTag, dbTag }) {
    return (
        <div className="flex items-center flex-wrap justify-center">
            <TechnologiesTags onClick={ allTags }>
                Todas
            </TechnologiesTags>
            <TechnologiesTags onClick={ frontEndTag }>
                Front-End
            </TechnologiesTags>
            <TechnologiesTags onClick={ backEndTag }>
                Back-End
            </TechnologiesTags>
            <TechnologiesTags onClick={ superSetTag }>
                Superset
            </TechnologiesTags>
            <TechnologiesTags onClick={ libraryTag }>
                Biblioteca
            </TechnologiesTags>
            <TechnologiesTags onClick={ frameworkTag }>
                Framework
            </TechnologiesTags>
            <TechnologiesTags onClick={ dbTag }>
                Database
            </TechnologiesTags>
        </div>
    )
}