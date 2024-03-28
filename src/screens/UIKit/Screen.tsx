import {
  FC,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import styled from "styled-components";

import "chartjs-adapter-date-fns";

import {
  COMPONENT_DOMAIN_ID,
  DATA_VISUALIZATION_DOMAIN_ID,
  Domain,
  OTHER_DOMAIN_ID,
  getDomain,
  hasChildren,
} from "./domain";

import "../../packages/ui-kit/style.css";

import { registry } from "./registry";

import { ToastProvider } from "../../packages/ui-kit/components/feedback/Toast";

import { APIDocs, Playground } from "../../packages/ui-kit/develop";

import domainData from "./domainData.json";

const componentDomain = getDomain(
  COMPONENT_DOMAIN_ID,
  domainData.domains.reverse()
) as Domain;
const dataVisualizationDomain = getDomain(
  DATA_VISUALIZATION_DOMAIN_ID,
  domainData.domains.reverse()
) as Domain;
const otherDomain = getDomain(
  OTHER_DOMAIN_ID,
  domainData.domains.reverse()
) as Domain;

const domains = [
  ...componentDomain.children,
  ...dataVisualizationDomain.children,
  ...otherDomain.children,
];

const DomainContext = createContext<{
  handleDomainClick: (domain: Domain) => void;
}>({
  handleDomainClick: () => {},
});

const Screen: FC = () => {
  const [domain, setDomain] = useState<Domain>(domains[0].children[0]);

  const selectedDomain = useMemo(() => {
    return registry[domain.id];
  }, [domain]);

  const [selectedComponent, setSelectedComponent] = useState<
    (typeof registry)[number]["components"][number]
  >(selectedDomain.components[0]);

  useEffect(() => {
    setSelectedComponent(selectedDomain.components[0]);
  }, [selectedDomain]);

  const handleDomainClick = (domain: Domain) => {
    if (domain.children.length === 0) {
      setDomain(domain);
    }
  };

  const handleComponentCaseClick = (
    playgroundComponent: (typeof registry)[number]["components"][number]
  ) => {
    setSelectedComponent(playgroundComponent);
  };
  if (componentDomain && dataVisualizationDomain && otherDomain) {
    return (
      <DomainContext.Provider
        value={{
          handleDomainClick,
        }}
      >
        <ToastProvider>
          <Container>
            <Nav>
              <DomainList domains={domains} />
              <CaseList>
                {selectedDomain.components.map((component, index) => {
                  const { title } = component;

                  return (
                    <li
                      key={index}
                      onClick={() => handleComponentCaseClick(component)}
                    >
                      {title}
                    </li>
                  );
                })}
              </CaseList>
            </Nav>
            <PlaygroundArea>
              <Title>{selectedComponent.title}</Title>
              <Playground
                key={JSON.stringify(selectedComponent)}
                displayName={selectedComponent.element.displayName}
                demo={selectedComponent.demo}
              />
              {selectedDomain.apiDocs && (
                <APIDocs rows={selectedDomain.apiDocs} />
              )}
            </PlaygroundArea>
          </Container>
        </ToastProvider>
      </DomainContext.Provider>
    );
  }
  return null;
};

export default Screen;

const DomainList: FC<{
  domains: Domain[];
}> = ({ domains }) => {
  const { handleDomainClick } = useContext(DomainContext);

  return (
    <ul>
      {domains.map((domain) => {
        return (
          <li key={domain.id}>
            <div onClick={() => handleDomainClick(domain)}>{domain.title}</div>
            {hasChildren(domain) && <DomainList domains={domain.children} />}
          </li>
        );
      })}
    </ul>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  width: 500px;
`;

const CaseList = styled.ul``;

const PlaygroundArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100%;
`;

const Title = styled.h3``;
