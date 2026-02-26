import styled from "@emotion/styled";
import OverLay from "../Overlay";

interface SearchMainProps {
  onCloseSearch: () => void;
}

export default function SearchMain({ onCloseSearch }: SearchMainProps) {
  return (
    <>
      <OverLay onCloseSearch={onCloseSearch} />
      <SearchMainWrapper>
        <SearchForm>
          <SearchInput type="text" placeholder="搜索" />
        </SearchForm>
        {/* 有搜索条件 则显示搜索结果 */}
        <SearchContent />
      </SearchMainWrapper>
    </>
  );
}

const SearchMainWrapper = styled.div`
  position: fixed;
  width: 90%;
  max-width: 768px;
  height: fit-content;
  border: 1px solid #0ff8;
  border-radius: var(--radius-md);
  background-color: #fffafa;
  inset: 0;
  margin: auto;
  z-index: 100;

  animation: search-show 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @keyframes search-show {
    from {
      opacity: 0;
      transform: translate(0, -20%);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #0ff8;
  border-radius: var(--radius-md);
`;

const SearchContent = styled.div`
  height: 400px;
`;
