import styled from "@emotion/styled";

interface SearchButtonProps {
  onOpenSearch: () => void;
}

export default function SearchButton({ onOpenSearch }: SearchButtonProps) {
  return (
    <SearchButtonWrapper
      onClick={(e) => {
        e.stopPropagation();
        onOpenSearch();
      }}
    >
      <i>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2228"
          width="23"
          height="23"
        >
          <path
            d="M443.904 909.14133333c-244.736 0-443.904-199.168-443.904-443.904s199.168-443.904 443.904-443.904 443.904 199.168 443.904 443.904-199.168 443.904-443.904 443.904z m0-835.584c-216.064 0-391.68 175.616-391.68 391.68s175.616 391.68 391.68 391.68 391.68-175.616 391.68-391.68-175.616-391.68-391.68-391.68zM992.256 1039.70133333c-7.168 0-13.824-2.56-18.432-7.68l-235.008-235.008c-10.24-10.24-10.24-26.624 0-36.864s26.624-10.24 36.864 0l235.008 235.008c10.24 10.24 10.24 26.624 0 36.864-4.608 5.12-11.264 7.68-18.432 7.68z"
            fill="#4d4d4d"
            p-id="2229"
          ></path>
        </svg>
      </i>
      <span>搜索</span>
      <span>Ctrl+K</span>
    </SearchButtonWrapper>
  );
}

const SearchButtonWrapper = styled.button`
  display: grid;
  justify-items: start;
  align-items: center;
  grid-template-columns: 40px 1fr 60px;

  margin: 0 12px;
  padding: 0 6px;
  border: 0.5px solid #0ff8;
  border-radius: 8px;

  > i {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
  }

  > span {
    font-size: 14px;
  }
`;
