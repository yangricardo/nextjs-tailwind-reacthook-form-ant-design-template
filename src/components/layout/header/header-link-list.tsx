import { HeaderLink, IHeaderLink } from './header-link';
import { HeaderSection } from './header-section';

interface HeaderLinkList {
  linkItems: IHeaderLink[];
}

export const HeaderLinkList = ({ linkItems }: HeaderLinkList) => (
  <HeaderSection className="justify-end">
    {linkItems
      .filter(({ isHeaderLink }) => isHeaderLink)
      .map(({ href, content }, index) => (
        <HeaderLink
          key={`header-link-${index}`}
          href={href}
          content={content}
        />
      ))}
  </HeaderSection>
);
