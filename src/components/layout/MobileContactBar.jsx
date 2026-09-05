// components/layout/MobileContactBar.jsx
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { pg } from '../../data/data';

const PHONE = '+911234567890';   // update with your number
const WHATSAPP = '911234567890'; // no + or spaces
const EMAIL = 'info@yourhotel.com';
const defaultMsg = `Hi, I'm interested in ${pg.suffix || 'your services'}!`;


function MobileContactBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden  bg-black/30 backdrop-blur-lg">

            <a href={`tel:${pg.phone}`}
                target="_blank"
                className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5  active:bg-primary-100"
            >
                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                    <Phone className='w-6 h-6 text-primary' size={20} />
                </div>

                <span className="text-xs font-medium" >Call</span>
            </a>

            <a href={`https://wa.me/${pg.phone.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5  border-x border-primary-200 active:bg-gray-100"
            >
                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                    <MessageCircle className='w-6 h-6 text-primary' size={20} />
                </div>
                <span className="text-xs font-medium">WhatsApp</span>
            </a>



            <a
                href={`mailto:${pg.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5  active:bg-primary-100"
            >
                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                    <Mail className='w-6 h-6 text-primary' size={20} />
                </div>
                <span className="text-xs font-medium">Email</span>
            </a >
        </div >
    );
}

export default MobileContactBar;