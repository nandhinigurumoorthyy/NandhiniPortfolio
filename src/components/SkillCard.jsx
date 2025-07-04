import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, label, desc }) => {
    return (
        <div className="flex items-center text-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group">
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                <img src={imgSrc} width={32} height={32} alt={label} />
            </figure>

            <div className='text-left'>
                <h3 className="text-slate-100 font-medium">{label}</h3>
                <p className="text-zinc-400 text-sm">{desc}</p>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default SkillCard;
