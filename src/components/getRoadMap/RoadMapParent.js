import RoadMapChild from './RoadMapChild'

const RoadMapParent = ({ roads }) => {
    return (
        <>
            {roads.map((road) => (
                <RoadMapChild key={road.tuy_id} road={road} />
            )
            )}
        </>
    )
}

export default RoadMapParent
