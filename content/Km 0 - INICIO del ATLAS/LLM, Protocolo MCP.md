---
publish: true
created: 2026-09-01T13:31:03.946Z
modified: 2026-09-17T10:14:41.256Z
---

#ia #MCP #Protocolo #Anthropic #Agentes

# Model Context Protocol (MCP) â€” protocolo para LLM y agentes de IA impulsado originalmente por Anthropic

âœ… Enlaces verificados y operativos en la fecha de elaboraciÃ³n del informe. Algunos recursos pueden requerir registro, suscripciÃ³n o acceso institucional.

# [Wikipedia](https://es.wikipedia.org/wiki/Protocolo_de_Contexto_de_Modelo)

# WEB

[Model Context Protocol â€” sitio oficial](https://modelcontextprotocol.io/?utm_source=chatgpt.com) â€“ Portal documental principal del estÃ¡ndar MCP. ReÃºne especificaciÃ³n, documentaciÃ³n tÃ©cnica, guÃ­as de desarrollo, SDK, extensiones y recursos para implementar clientes y servidores MCP. ([GitHub][1])

[Model Context Protocol â€” Specification](https://modelcontextprotocol.io/specification/2025-11-25?utm_source=chatgpt.com) â€“ EspecificaciÃ³n tÃ©cnica oficial del protocolo. Define las primitivas que los servidores pueden ofrecer â€”Resources, Prompts y Toolsâ€” y las capacidades del lado cliente, entre ellas Sampling, Roots y Elicitation. ([Model Context Protocol][2])

[Model Context Protocol â€” Architecture](https://modelcontextprotocol.io/specification/2025-06-18/architecture?utm_source=chatgpt.com) â€“ DocumentaciÃ³n oficial de la arquitectura hostâ€“clientâ€“server. MCP utiliza JSON-RPC y establece sesiones en las que cliente y servidor negocian explÃ­citamente sus capacidades. ([Model Context Protocol][3])

[Anthropic â€” Model Context Protocol (MCP)](https://docs.anthropic.com/en/docs/mcp?utm_source=chatgpt.com) â€“ DocumentaciÃ³n oficial de Anthropic sobre MCP y su utilizaciÃ³n en Claude, Claude Code, Claude Desktop y la Claude API. Define MCP como un protocolo abierto que estandariza la forma en que las aplicaciones proporcionan contexto y herramientas a los LLM. ([Claude Platform Docs][4])

[Anthropic â€” Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol?hsLang=en-us\&utm_source=chatgpt.com) â€“ Anuncio original de MCP, publicado el 25 de noviembre de 2024. Explica el problema que pretendÃ­a resolver: sustituir integraciones especÃ­ficas entre asistentes de IA, repositorios de informaciÃ³n, herramientas empresariales y entornos de desarrollo por un estÃ¡ndar comÃºn. ([Anthropic][5])

[Model Context Protocol â€” GitHub Organization](https://github.com/modelcontextprotocol?utm_source=chatgpt.com) â€“ OrganizaciÃ³n oficial del proyecto en GitHub. Aloja la especificaciÃ³n y los SDK oficiales para distintos lenguajes, ademÃ¡s de servidores, herramientas y proyectos relacionados. ([GitHub][6])

[Model Context Protocol â€” Specification and Documentation Repository](https://github.com/modelcontextprotocol/modelcontextprotocol?utm_source=chatgpt.com) â€“ Repositorio de referencia de la especificaciÃ³n, esquemas del protocolo y documentaciÃ³n. Constituye una fuente primaria especialmente Ãºtil para seguir cambios y desarrollo tÃ©cnico. ([GitHub][1])

[Model Context Protocol â€” Reference Servers](https://github.com/modelcontextprotocol/servers?utm_source=chatgpt.com) â€“ Repositorio oficial de implementaciones de referencia. Incluye servidores demostrativos como Everything, Fetch, Filesystem, Git, Memory, Sequential Thinking y Time. El propio proyecto advierte que son referencias educativas y no soluciones de producciÃ³n listas para desplegar. ([GitHub][7])

[MCP Registry](https://modelcontextprotocol.io/registry/about?utm_source=chatgpt.com) â€“ Registro oficial centralizado de metadatos de servidores MCP pÃºblicamente accesibles. Permite publicaciÃ³n, descubrimiento, verificaciÃ³n de namespaces e informaciÃ³n estandarizada de instalaciÃ³n y configuraciÃ³n; actualmente se identifica como proyecto en preview. ([Model Context Protocol][8])

[Anthropic â€” MCP Connector](https://docs.anthropic.com/es/docs/agents-and-tools/mcp-connector?utm_source=chatgpt.com) â€“ DocumentaciÃ³n del conector que permite utilizar servidores MCP remotos desde la Messages API de Claude. Es un recurso especialmente relevante para estudiar MCP desde la perspectiva de integraciÃ³n programÃ¡tica con modelos de Anthropic. ([Claude Platform Docs][9])

[Anthropic â€” Getting Started with Custom Connectors Using Remote MCP](https://support.anthropic.com/en/articles/11175166-about-custom-integrations-using-remote-mcp?utm_source=chatgpt.com) â€“ DocumentaciÃ³n sobre conectores personalizados y servidores MCP remotos en Claude. Incluye consideraciones prÃ¡cticas de seguridad y privacidad. ([Centro de ayuda de Anthropic][10])

[Anthropic â€” Connect your tools to unlock a smarter, more capable AI companion](https://support.anthropic.com/en/articles/11817150-connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion?utm_source=chatgpt.com) â€“ DocumentaciÃ³n orientada a usuarios sobre conectores y capacidades basadas en MCP dentro del ecosistema Claude. ([Centro de ayuda de Anthropic][11])

[Anthropic Engineering â€” Code execution with MCP: Building more efficient agents](https://www.anthropic.com/engineering/code-execution-with-mcp?ck_subscriber_id=3577206632\&utm_source=chatgpt.com) â€“ AnÃ¡lisis tÃ©cnico sobre la combinaciÃ³n de MCP y ejecuciÃ³n de cÃ³digo para agentes que utilizan numerosas herramientas. Examina costes de contexto y patrones de arquitectura para sistemas agentivos. ([Anthropic][12])

[Anthropic Engineering â€” Writing effective tools for AI agentsâ€”using AI agents](https://www.anthropic.com/engineering/writing-tools-for-agents?asuniq=3a919c3e\&utm_source=chatgpt.com) â€“ Documento tÃ©cnico sobre diseÃ±o, evaluaciÃ³n y optimizaciÃ³n de herramientas para agentes. MCP aparece como infraestructura para proporcionar grandes conjuntos de herramientas a los LLM. ([Anthropic][13])

[Anthropic Engineering â€” Desktop Extensions: One-click MCP server installation for Claude Desktop](https://www.anthropic.com/engineering/desktop-extensions?utm_source=chatgpt.com) â€“ Explica la arquitectura de Desktop Extensions y el empaquetado de servidores MCP para Claude Desktop. Documenta ademÃ¡s la evoluciÃ³n del formato hacia la extensiÃ³n `.mcpb`. ([Anthropic][14])

[Anthropic Engineering](https://www.anthropic.com/engineering?utm_source=chatgpt.com) â€“ Archivo tÃ©cnico de ingenierÃ­a de Anthropic. Contiene diversos trabajos sobre MCP, agentes, tool use, context engineering y Claude Code. ([Anthropic][15])

[Model Context Protocol â€” Everything MCP Server](https://github.com/modelcontextprotocol/servers/blob/main/src/everything/README.md?utm_source=chatgpt.com) â€“ Servidor de referencia concebido para ejercitar una gran parte de las funcionalidades del protocolo, incluidas tools, resources, prompts y sampling. Es particularmente Ãºtil para desarrolladores de clientes MCP. ([GitHub][16])

[Model Context Protocol â€” Security Policy](https://github.com/modelcontextprotocol/modelcontextprotocol/security?utm_source=chatgpt.com) â€“ Referencia de seguridad del proyecto. Subraya que ejecutar un servidor MCP local implica otorgarle el acceso disponible en su entorno de ejecuciÃ³n y que la selecciÃ³n y confianza del servidor requieren evaluaciÃ³n explÃ­cita. ([GitHub][17])

[Linux Foundation â€” Agentic AI Foundation (AAIF) y MCP](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation?utm_source=chatgpt.com) â€“ Fuente institucional sobre la incorporaciÃ³n de MCP a la Agentic AI Foundation. En diciembre de 2025 MCP fue aportado a esta fundaciÃ³n de Linux Foundation, proporcionando un marco neutral de gobernanza abierta. ([Linux Foundation][18])

[Anthropic â€” Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation?trk=article-ssr-frontend-pulse_little-text-block\&utm_source=chatgpt.com) â€“ Anuncio oficial de Anthropic de diciembre de 2025 sobre la donaciÃ³n de MCP a la Agentic AI Foundation. Documenta tambiÃ©n la extensiÃ³n del protocolo a mÃºltiples productos y proveedores de IA. ([Anthropic][19])

[Anthropic â€” MCP Tunnels](https://platform.claude.com/docs/en/agents-and-tools/mcp-tunnels/overview?utm_source=chatgpt.com) â€“ DocumentaciÃ³n sobre la conexiÃ³n segura de Claude con servidores MCP situados en redes privadas mediante conexiones salientes, sin necesidad de publicar directamente los servicios internos. ([Claude Platform][20])

[Anthropic â€” MCP Directory Policy](https://support.anthropic.com/en/articles/11697096-anthropic-mcp-directory-policy?utm_source=chatgpt.com) â€“ PolÃ­tica aplicada al directorio de servidores y conectores MCP de Anthropic, con criterios relativos a seguridad, privacidad, compatibilidad y cumplimiento. ([Centro de ayuda de Anthropic][21])

[Anthropic â€” Labs](https://www.anthropic.com/news/introducing-anthropic-labs?gh_src=interestedfyi\&utm_source=chatgpt.com) â€“ Documento institucional de 2026 que sitÃºa MCP dentro de la estrategia experimental de Anthropic y refleja el grado de adopciÃ³n alcanzado por el protocolo desde su publicaciÃ³n inicial. ([Anthropic][22])

[Anthropic â€” Stainless acquisition](https://www.anthropic.com/news/anthropic-acquires-stainless?_bhlid=96ef68c3bff00ae5b93f5106e95aee8b1bb10076\&utm_source=chatgpt.com) â€“ Anuncio de mayo de 2026 sobre la adquisiciÃ³n de Stainless, compaÃ±Ã­a especializada en generaciÃ³n de SDK, CLI y tooling para servidores MCP. Es relevante para seguir la evoluciÃ³n industrial del ecosistema de herramientas de Anthropic. ([Anthropic][23])

# YOUTUBE

[Anthropic â€” YouTube](https://www.youtube.com/@anthropic-ai?utm_source=chatgpt.com) â€“ Canal oficial de Anthropic. Incluye material tÃ©cnico sobre Claude, agentes, herramientas y MCP; entre sus contenidos figura una sesiÃ³n especÃ­fica del equipo de Anthropic dedicada al Model Context Protocol. ([YouTube][24])

[Model Context Protocol â€” YouTube](https://www.youtube.com/@modelcontextprotocol?utm_source=chatgpt.com) â€“ Canal vinculado al ecosistema MCP cuando se encuentre disponible contenido oficial; debe contrastarse con la documentaciÃ³n principal del proyecto para cuestiones normativas del protocolo.

[AI Engineer](https://www.youtube.com/@aiDotEngineer?utm_source=chatgpt.com) â€“ Canal tÃ©cnico de AI Engineer. Ha documentado conferencias con miembros del equipo MCP de Anthropic y sesiones especializadas sobre arquitectura, servidores, clientes, observabilidad y evoluciÃ³n del protocolo. ([YouTube][25])

# PODCAST

No se han identificado suficientes podcasts oficiales dedicados exclusivamente a MCP que cumplan los criterios documentales exigidos. Para contenido audiovisual y entrevistas tÃ©cnicas sobre el protocolo resulta preferible acudir a las fuentes primarias de Anthropic, Model Context Protocol y las conferencias tÃ©cnicas enlazadas en YOUTUBE.

# LIBROS

[AI Agents with MCP: Model Context Protocol for Building Clients, Services, and End-to-End Agents â€” Kyle Stratis](https://www.oreilly.com/library/view/ai-agents-with/9798341639546/?utm_source=chatgpt.com) â€“ Obra de Oâ€™Reilly Media dedicada especÃ­ficamente a la arquitectura MCP, clientes, servidores, transportes, ciclo de conexiÃ³n y construcciÃ³n de sistemas agentivos completos. La ediciÃ³n definitiva figura para octubre de 2026, con acceso anticipado disponible. ([O'Reilly Media][26])

[Model Context Protocol for LLMs: Build secure, scalable, and context-aware AI agents using a standardized protocol â€” Naveen Krishnan](https://books.google.com/books?id=CNfEEQAAQBAJ\&utm_source=chatgpt.com) â€“ Libro publicado por Packt en 2026 centrado en aplicaciones LLM y agentes construidos con MCP, incluyendo integraciÃ³n con frameworks agentivos, seguridad, escalabilidad y sistemas multiagente. ([Google Libros][27])

La bibliografÃ­a monogrÃ¡fica sobre MCP es todavÃ­a reciente. Se priorizan estas obras con referencias editoriales comprobables frente a tÃ­tulos autopublicados de calidad documental mÃ¡s difÃ­cil de establecer.

# REVISTAS

No se han identificado revistas cientÃ­ficas o profesionales dedicadas especÃ­ficamente a MCP con suficiente trayectoria editorial para constituir publicaciones de referencia propias del protocolo. Para investigaciÃ³n acadÃ©mica conviene consultar literatura sobre agentes LLM, tool use, interoperabilidad de agentes, function calling, context engineering y seguridad de sistemas agentivos.

# MUSEOS

No existen museos especializados en Model Context Protocol que resulten documentalmente pertinentes.

# UNIVERSIDADES

No se han identificado universidades que mantengan centros o programas institucionales dedicados especÃ­ficamente a MCP con suficiente entidad para considerarlos recursos especializados independientes. La investigaciÃ³n universitaria relacionada se encuadra principalmente en agentes de IA, LLM, sistemas distribuidos, interacciÃ³n humano-IA y seguridad.

# ASOCIACIONES

[Agentic AI Foundation â€” Linux Foundation](https://aaif.io/?utm_source=chatgpt.com) â€“ FundaciÃ³n de gobernanza abierta bajo Linux Foundation a la que Anthropic aportÃ³ MCP en diciembre de 2025. Constituye la organizaciÃ³n institucional mÃ¡s importante para estudiar la gobernanza futura del estÃ¡ndar. ([Linux Foundation][18])

[Linux Foundation](https://www.linuxfoundation.org/?utm_source=chatgpt.com) â€“ OrganizaciÃ³n matriz bajo la que opera la Agentic AI Foundation. Su documentaciÃ³n institucional constituye una fuente primaria para estudiar la gobernanza abierta de MCP desde diciembre de 2025. ([Linux Foundation][18])

# NEWSLETTER

[Anthropic News](https://www.anthropic.com/news?utm_source=chatgpt.com) â€“ Canal institucional de anuncios de Anthropic. Permite seguir cambios relacionados con MCP, Claude, agentes, conectores y evoluciÃ³n de la plataforma.

[Anthropic Engineering](https://www.anthropic.com/engineering?utm_source=chatgpt.com) â€“ PublicaciÃ³n tÃ©cnica periÃ³dica del equipo de ingenierÃ­a de Anthropic. Ha publicado anÃ¡lisis especÃ­ficos sobre MCP, ejecuciÃ³n de cÃ³digo, herramientas para agentes, Desktop Extensions y context engineering. ([Anthropic][15])

# TV

No se han identificado canales de televisiÃ³n especializados en MCP con suficiente relevancia documental. La cobertura especializada del protocolo se produce fundamentalmente mediante publicaciones tÃ©cnicas, conferencias y canales digitales.

RADIO

No se han identificado emisoras de radio especializadas en MCP. Las entrevistas y debates sobre el protocolo aparecen principalmente en podcasts tecnolÃ³gicos y plataformas audiovisuales.

# PRENSA ONLINE

[Anthropic News](https://www.anthropic.com/news?utm_source=chatgpt.com) â€“ Fuente institucional primaria para anuncios relativos a MCP. Incluye el lanzamiento original de noviembre de 2024 y la transferencia del proyecto a la Agentic AI Foundation en diciembre de 2025. ([Anthropic][5])

[Anthropic Engineering](https://www.anthropic.com/engineering?utm_source=chatgpt.com) â€“ PublicaciÃ³n tÃ©cnica que documenta aspectos de ingenierÃ­a relacionados con MCP, agentes y herramientas. Su interÃ©s reside en ofrecer informaciÃ³n directamente producida por los equipos responsables de la tecnologÃ­a. ([Anthropic][15])

[Linux Foundation Newsroom](https://www.linuxfoundation.org/press?utm_source=chatgpt.com) â€“ Fuente institucional para seguir la gobernanza de MCP dentro de la Agentic AI Foundation y la evoluciÃ³n de los proyectos abiertos relacionados con infraestructura agentiva. ([Linux Foundation][18])

# PRENSA ESCRITA

No existe actualmente una publicaciÃ³n impresa dedicada especÃ­ficamente a Model Context Protocol que reÃºna suficiente especializaciÃ³n, continuidad y autoridad documental para incluirla como referencia principal. La evoluciÃ³n de MCP se documenta con mucha mayor precisiÃ³n en su especificaciÃ³n oficial, repositorios, publicaciones tÃ©cnicas de Anthropic y documentaciÃ³n de la Agentic AI Foundation.

[1]: https://github.com/modelcontextprotocol/modelcontextprotocol?utm_source=chatgpt.com "GitHub - modelcontextprotocol/modelcontextprotocol: Specification andÂ documentation for the Model Context Protocol Â· GitHub"

[2]: https://modelcontextprotocol.io/specification/2025-11-25?utm_source=chatgpt.com "Specification - Model Context Protocol"

[3]: https://modelcontextprotocol.io/specification/2025-06-18/architecture?utm_source=chatgpt.com "Architecture - Model Context Protocol"

[4]: https://docs.anthropic.com/en/docs/mcp?utm_source=chatgpt.com "Model Context Protocol (MCP) - Anthropic"

[5]: https://www.anthropic.com/news/model-context-protocol?hsLang=en-us&utm_source=chatgpt.com "Introducing the Model Context Protocol \ Anthropic"

[6]: https://github.com/modelcontextprotocol?utm_source=chatgpt.com "Model Context Protocol Â· GitHub"

[7]: https://github.com/modelcontextprotocol/servers?utm_source=chatgpt.com "GitHub - modelcontextprotocol/servers: Model Context Protocol Servers Â· GitHub"

[8]: https://modelcontextprotocol.io/registry/about?utm_source=chatgpt.com "The MCP Registry - Model Context Protocol"

[9]: https://docs.anthropic.com/es/docs/agents-and-tools/mcp-connector?utm_source=chatgpt.com "Conector MCP - Anthropic"

[10]: https://support.anthropic.com/en/articles/11175166-about-custom-integrations-using-remote-mcp?utm_source=chatgpt.com "Getting Started with Custom Connectors Using Remote MCP | Anthropic Help Center"

[11]: https://support.anthropic.com/en/articles/11817150-connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion?utm_source=chatgpt.com "Connect your tools to unlock a smarter, more capable AI companion | Anthropic Help Center"

[12]: https://www.anthropic.com/engineering/code-execution-with-mcp?ck_subscriber_id=3577206632&utm_source=chatgpt.com "Code execution with MCP: building more efficient AI agents \ Anthropic"

[13]: https://www.anthropic.com/engineering/writing-tools-for-agents?asuniq=3a919c3e&utm_source=chatgpt.com "Writing effective tools for AI agentsâ€”using AI agents \ Anthropic"

[14]: https://www.anthropic.com/engineering/desktop-extensions?utm_source=chatgpt.com "Claude Desktop Extensions: One-click MCP server installation for Claude Desktop \ Anthropic"

[15]: https://www.anthropic.com/engineering?utm_source=chatgpt.com "Engineering \ Anthropic"

[16]: https://github.com/modelcontextprotocol/servers/blob/main/src/everything/README.md?utm_source=chatgpt.com "servers/src/everything/README.md at main Â· modelcontextprotocol/servers Â· GitHub"

[17]: https://github.com/modelcontextprotocol/modelcontextprotocol/security?utm_source=chatgpt.com "Overview Â· modelcontextprotocol/modelcontextprotocol Â· GitHub"

[18]: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation?utm_source=chatgpt.com "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF), Anchored by New Project Contributions Including Model Context Protocol (MCP), goose and AGENTS.md"

[19]: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation?trk=article-ssr-frontend-pulse_little-text-block&utm_source=chatgpt.com "Donating the Model Context Protocol and establishing the Agentic AI Foundation \ Anthropic"

[20]: https://platform.claude.com/docs/en/agents-and-tools/mcp-tunnels/overview?utm_source=chatgpt.com "MCP tunnels - Claude Platform Docs"

[21]: https://support.anthropic.com/en/articles/11697096-anthropic-mcp-directory-policy?utm_source=chatgpt.com "Anthropic MCP Directory Policy | Anthropic Help Center"

[22]: https://www.anthropic.com/news/introducing-anthropic-labs?gh_src=interestedfyi&utm_source=chatgpt.com "Introducing Labs \ Anthropic"

[23]: https://www.anthropic.com/news/anthropic-acquires-stainless?_bhlid=96ef68c3bff00ae5b93f5106e95aee8b1bb10076&utm_source=chatgpt.com "Anthropic acquires Stainless \ Anthropic"

[24]: https://www.youtube.com/watch?v=CQywdSdi5iA&utm_source=chatgpt.com "The Model Context Protocol (MCP) - YouTube"

[25]: https://www.youtube.com/watch?v=z4zXicOAF28&utm_source=chatgpt.com "AI Engineer World's Fair 2025 - Day 1 Keynotes & MCP track ft. Anthropic MCP team - YouTube"

[26]: https://www.oreilly.com/library/view/ai-agents-with/9798341639546/?utm_source=chatgpt.com "AI Agents with MCP [Book]"

[27]: https://books.google.com/books?id=CNfEEQAAQBAJ&utm_source=chatgpt.com "Model Context Protocol for LLMs: Build secure, scalable, and context-aware ... - Naveen Krishnan - Google Books"
