import { SiStarship } from 'react-icons/si';
import { BsTrophyFill } from 'react-icons/bs';

const List = (props) =>
{
    const { ship, mostAppearedShip } = props;

    return (
        <div className="flexCol pdngVSM yollowClr mrgnBtmSM brdrBlackSM brdrRadiusXSM">
            <div className="flexRow card whiteCard alignCntr pdngMD">
                <div className="flexAutoRow">
                    <div className="circle circleMD">
                        <SiStarship size={40} />
                    </div>
                </div>
                <div className="flexMinWidthRow pdngHMD ">
                    <div className="flexCol">
                        <div className="flexRow yollowClr">
                            <span className="capitalTxt titleHeading headingLG">{ship.name}</span>&nbsp;
                            {mostAppearedShip === ship.name && <BsTrophyFill size={24} />}
                        </div>
                        <span className="titleHeading headingSM">Model</span>
                        <span className="titleHeading headingSM">{ship.model}</span>
                    </div>
                </div>
                <div className="flexAutoRow pdngLMD">
                    <div className="flexCol">
                        <small>Number of films</small>
                        <small className='subHeadingSM'>{ship.films.length}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;