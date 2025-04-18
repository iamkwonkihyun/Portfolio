import * as S from "./styled";
import { ReadmePage, MystackPage, ProjectsPage, AboutPage, ContactPage } from "../../pages";

export const Editor = ({ activeFile }: { activeFile: string }) => {
    const renderComponent = () => {
        switch (activeFile) {
            case "README.md":
                return <ReadmePage />;
            case "MyStack.tsx":
                return <MystackPage />;
            case "Projects.ts":
                return <ProjectsPage />;
            case "About.py":
                return <AboutPage />;
            case "Contact.json":
                return <ContactPage />;
            default:
                // 기본 파일: README.md 페이지로 설정
                return <ReadmePage />;
        }
    };

    const renderedLines = (
        <S.CodeLine>
            {Array.from({ length: 30 }, (_, i) => (
                <S.CodeLine key={i}>{i + 1}</S.CodeLine>
            ))}
        </S.CodeLine>
    );

    return (
        <S.EditorWrapper>
            <S.LineNumberWrapper>{renderedLines}</S.LineNumberWrapper>
            <S.CodeWrapper>{renderComponent()}</S.CodeWrapper>
        </S.EditorWrapper>
    );
};
