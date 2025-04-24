import { ServiceAgreement } from './ServiceAgreement';
import { StandardContent } from './pages/StandardContent';
import { OptionalUpgrades } from './pages/OptionalUpgrades';
import { Additional } from './pages/Additional';
import { useView } from '../../hooks/GlobalMap';
export function MainContent() {
    const { view } = useView();
    return (
        <div
            style={
                {
                    // border: '1px solid green',
                }
            }
        >
            <ServiceAgreement />
            {view.toLowerCase() === 'standard content' && <StandardContent />}
            {view.toLowerCase() === 'optional upgrades' && <OptionalUpgrades />}
            {view.toLowerCase() === 'additional cost & services' && <Additional />}
        </div>
    );
}
