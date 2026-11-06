import {
  AddressBookIcon,
  BookOpenTextIcon,
  BroomIcon,
  CalculatorIcon,
  CalendarCheckIcon,
  CameraIcon,
  CameraPlusIcon,
  CertificateIcon,
  ChairIcon,
  ChampagneIcon,
  ChatsCircleIcon,
  ClipboardTextIcon,
  ClockIcon,
  CrownSimpleIcon,
  DoorOpenIcon,
  EnvelopeSimpleIcon,
  EyeIcon,
  FireIcon,
  FlowerLotusIcon,
  FlowerTulipIcon,
  GiftIcon,
  HandCoinsIcon,
  HandHeartIcon,
  HandshakeIcon,
  IdentificationBadgeIcon,
  ImageSquareIcon,
  LayoutIcon,
  LeafIcon,
  LightbulbIcon,
  ListChecksIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MicrophoneStageIcon,
  MusicNotesIcon,
  NotepadIcon,
  PackageIcon,
  PaintBrushIcon,
  PhoneIcon,
  ReceiptIcon,
  RepeatIcon,
  ScrollIcon,
  ShieldCheckIcon,
  SignatureIcon,
  SpeakerHighIcon,
  TagIcon,
  UserFocusIcon,
  UsersFourIcon,
  UsersThreeIcon,
  VideoCameraIcon,
  VinylRecordIcon,
  WavesIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { TAX_RATE_LABEL, taxFor, type IconKey, type Inclusion, type ServicePackage } from "@/content/services";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const usdCents = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

// One quiet line icon per kind of inclusion (Phosphor, MIT).
const icons: Record<IconKey, typeof CameraIcon> = {
  coordination: ClipboardTextIcon,
  permit: CertificateIcon,
  officiant: BookOpenTextIcon,
  beauty: PaintBrushIcon,
  bouquet: FlowerTulipIcon,
  crown: CrownSimpleIcon,
  lei: LeafIcon,
  photo: CameraIcon,
  video: VideoCameraIcon,
  music: MusicNotesIcon,
  champagne: ChampagneIcon,
  venue: WavesIcon,
  arch: FlowerLotusIcon,
  chairs: ChairIcon,
  timeline: ClockIcon,
  script: ScrollIcon,
  visit: MapPinIcon,
  emcee: MicrophoneStageIcon,
  checklist: ListChecksIcon,
  rehearsal: RepeatIcon,
  staff: UsersThreeIcon,
  setup: LayoutIcon,
  oversee: EyeIcon,
  registration: IdentificationBadgeIcon,
  ushering: DoorOpenIcon,
  cleanup: BroomIcon,
  gift: GiftIcon,
  sitecheck: MagnifyingGlassIcon,
  insurance: ShieldCheckIcon,
  sound: SpeakerHighIcon,
  consultation: ChatsCircleIcon,
  questionnaire: NotepadIcon,
  storyboard: ImageSquareIcon,
  budget: CalculatorIcon,
  quotes: ReceiptIcon,
  vendorlist: AddressBookIcon,
  negotiate: HandshakeIcon,
  contracts: SignatureIcon,
  meetings: CalendarCheckIcon,
  communication: EnvelopeSimpleIcon,
  facetoface: UsersFourIcon,
  mailing: PackageIcon,
  discount: TagIcon,
  vendors: PhoneIcon,
  tips: HandCoinsIcon,
  assistant: HandHeartIcon,
  familyphoto: CameraPlusIcon,
  dj: VinylRecordIcon,
  sparks: FireIcon,
  lighting: LightbulbIcon,
  photobooth: UserFocusIcon,
};

// Services page package list: one clean row per package (name, type, one-line summary, price on
// the right). Opening a row reveals its photos (one wedding per package), everything it includes,
// and a price card (named, so you know which package you're reading) with the tax and grand total. Native <details> sharing
// one `name`, so only one is open at a time and all the text stays in the HTML for search engines.
// Each row's id is the homepage "Learn more" anchor. PackageScroll handles scrolling to a row.
export function PackageList({ packages }: { packages: ServicePackage[] }) {
  return (
    <div className="border-t border-fog">
      {packages.map((pkg, i) => {
        const tax = taxFor(pkg.price);
        return (
          <details
            key={pkg.id}
            id={pkg.id}
            name="packages"
            className="package group scroll-mt-(--header-h) border-b border-fog md:scroll-mt-(--header-h-md)"
          >
            <summary className="flex cursor-pointer items-start gap-4 py-7 md:items-center md:gap-8 md:py-8">
              <span className="label w-8 shrink-0 pt-1.5 text-xs font-medium text-gold tabular-nums md:w-10 md:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-2">
                <span className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-gold">
                  {pkg.type}
                  {pkg.popular && (
                    <span className="rounded-full bg-cream-muted px-2.5 py-0.5 text-tiny tracking-meta text-gold-deep">
                      Most popular
                    </span>
                  )}
                </span>
                <span translate="no" className="text-h3 leading-heading font-extralight md:text-h3-lg">
                  {pkg.name}
                  {pkg.meaning && <span className="ml-3 text-lg font-normal text-ink/60">{pkg.meaning}</span>}
                </span>
                <span className="text-meta leading-prose font-normal text-pretty text-ink/75">{pkg.summary}</span>
                <Price price={pkg.price} className="md:hidden" />
              </span>
              <Price price={pkg.price} className="hidden shrink-0 text-right md:flex" />
              {/* Plus turns into a minus when open. */}
              <span
                aria-hidden="true"
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/30 transition-colors group-hover:border-ink group-open:border-ink group-open:bg-ink group-open:text-cream"
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>

            <div className="flex flex-col gap-12 pt-1 pb-12 md:pt-2 md:pl-18 lg:pb-16">
              {/* Three photos: a wide lead and two tall. Two photos: side by side. */}
              <div
                className={`grid grid-cols-2 gap-2 md:gap-3 ${pkg.photos.length > 2 ? "md:grid-cols-(--package-photo-cols)" : ""}`}
              >
                {pkg.photos.map((photo, p) => {
                  const lead = p === 0 && pkg.photos.length > 2;
                  return (
                    <div
                      key={photo.src}
                      className={`relative overflow-hidden bg-fog ${lead ? "col-span-2 aspect-(--aspect-package) md:col-span-1 md:aspect-auto" : "aspect-square md:aspect-auto"} md:h-(--package-photo-h)`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={lead ? "(min-width: 768px) 45vw, 100vw" : pkg.photos.length > 2 ? "(min-width: 768px) 22vw, 50vw" : "(min-width: 768px) 40vw, 50vw"}
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-12 lg:grid-cols-(--package-detail-cols) lg:gap-16">
                <div className="flex flex-col gap-10">
                  <p className="max-w-copy-legal text-lg leading-prose font-normal text-pretty text-ink/80">{pkg.overview}</p>
                  {pkg.groups.map((group, g) => (
                    <div key={group.title ?? g} className="flex flex-col gap-5">
                      {group.title && <h4 className="label text-xs font-semibold">{group.title}</h4>}
                      <IconList items={group.items} />
                    </div>
                  ))}
                  {pkg.closing && (
                    <p className="max-w-copy-legal text-body leading-prose font-normal text-pretty text-ink/80">{pkg.closing}</p>
                  )}
                </div>

                {/* Pinned just under the header on wide screens; if a short screen can't fit it all,
                    it scrolls inside itself rather than losing its bottom. The button sits right under
                    the total so it never drops out of view. */}
                <aside
                  data-lenis-prevent
                  className="flex flex-col self-start bg-cream p-7 md:p-9 lg:sticky lg:top-(--package-card-top) lg:max-h-(--package-card-max-h) lg:overflow-y-auto lg:overscroll-contain lg:p-8"
                >
                  <div className="flex flex-col gap-1 pb-4">
                    <p className="label text-xs font-medium text-gold-deep">Investment</p>
                    <p translate="no" className="text-2xl leading-heading font-light text-balance">{pkg.name}</p>
                  </div>
                  <dl className="flex flex-col gap-2 border-t border-cream-muted py-4 text-meta font-normal text-ink/80">
                    <div className="flex justify-between gap-4">
                      <dt>Package price</dt>
                      <dd className="tabular-nums">{usdCents.format(pkg.price)}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Tax (4.712%)</dt>
                      <dd className="tabular-nums">{usdCents.format(tax)}</dd>
                    </div>
                  </dl>
                  <dl className="flex items-baseline justify-between gap-4 border-y border-cream-muted py-4">
                    <dt className="label text-xs font-semibold">Grand total</dt>
                    <dd className="text-2xl font-light tabular-nums">{usdCents.format(pkg.price + tax)}</dd>
                  </dl>
                  <ButtonLink href="/contact" className="mt-5 w-full">
                    Contact us
                  </ButtonLink>
                  <dl className="mt-6 flex flex-col gap-3">
                    {pkg.details.map((d) => (
                      <div key={d.title} className="flex flex-col gap-1">
                        <dt className="label text-xs font-semibold">{d.title}</dt>
                        <dd className="text-meta leading-prose font-normal text-pretty text-ink/75">{d.text}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}

// "$5,500 + 4.712% GE tax": under the summary on phones, on the right of the row from 768px.
function Price({ price, className = "" }: { price: number; className?: string }) {
  return (
    <span className={`flex flex-col gap-0.5 text-ink ${className}`}>
      <span className="text-lg font-normal tabular-nums md:text-2xl md:font-light">{usd.format(price)}</span>
      <span className="text-xs font-normal text-ink/60">+ {TAX_RATE_LABEL}</span>
    </span>
  );
}

// One column: icon, name, then her description underneath.
function IconList({ items }: { items: Inclusion[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <li key={item.title} className="flex gap-5">
            <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-ink/55">
              <Icon size={22} weight="light" />
            </span>
            <span className="flex flex-col gap-1 pt-1">
              <span className="text-body font-medium text-pretty text-ink">{item.title}</span>
              {item.text && <span className="text-meta leading-prose font-normal text-pretty text-ink/75">{item.text}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
