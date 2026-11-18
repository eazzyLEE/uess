import { Poppins } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import DonateContent from './DonateContent';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Donate() {
  return (
    <div className={poppins.className}>
      <Navbar />
      <DonateContent />
    </div>
  );
}
