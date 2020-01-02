import Deck from '../slide-deck';
import { defaultDeck } from '../decks';
import { main } from '../templates';

export default () => <Deck config={defaultDeck} template={main} />;
