import { trackOutbound } from '@/shared/track-outbound';
import sponsors from '../shared/sponsors-list.json';

export default function FooterSponsors() {
  return (
    <div className="my-8 flex flex-wrap justify-center gap-1">
      {sponsors
        .filter(({ plan }) => plan !== 'Sponsor')
        .map(({ link, title, image, image_h, alt }) => {
          return (
            <a
              className="relative flex items-center justify-center rounded border p-px text-center hover:bg-gray-50 dark:border-none dark:bg-white"
              href={link}
              key={title}
              title={title}
              rel="noopener"
              target="_blank"
              onClick={() => trackOutbound(link)}
            >
              <img
                className="h-12 w-12 rounded-[3px] object-contain"
                src={`/images/sponsors/${image}`}
                alt={title}
              />
            </a>
          );
        })}
    </div>
  );
}
