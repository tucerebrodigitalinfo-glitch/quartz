---
publish: true
created: 2026-07-12T14:33:20.319Z
modified: 2026-09-17T10:13:57.944Z
---

#IA #AgÃ©ntica #Agentes  #Ãndices

[![Choosing the Right AI Agent Framework: LangGraph vs CrewAI vs AutoGen â€” Agent Mag](https://images.openai.com/static-rsc-4/tqnHC0INRbuSj_oQBJSeGBuLWIFKy0JwyBMrBHhn5juIZIrBijswEBCX1I6SmtuLIC0dcj71H2xatRVzkA4VcnvCLg9vE55bBaFvX27F8lEPZwP8YcC09AIj-M3xCqnlvDUulKCXIiGSsQ5ybxDyfXe0km-D3tUT8vt_1QbPz10?purpose=inline)](https://agentmag.dev/articles/choosing-the-right-ai-agent-framework-langgraph-vs-crewai-vs-autogen?utm_source=chatgpt.com)

# ARQUITECTURA AGÃ‰NTICA DE IA

âœ… Enlaces verificados y operativos en la fecha de elaboraciÃ³n del informe. Algunos recursos pueden requerir registro, suscripciÃ³n o acceso institucional.

# [Wikipedia](https://es.wikipedia.org/wiki/Agente_de_inteligencia_artificial)

# WEB

[OpenAI â€” Agents SDK](https://developers.openai.com/api/docs/guides/agents) â€“ DocumentaciÃ³n oficial para construir arquitecturas agÃ©nticas en las que el servidor controla despliegue, estado, herramientas y aprobaciones mientras el SDK gestiona el bucle de ejecuciÃ³n del agente. Es una referencia central para _tool calling_, _handoffs_, contexto, ejecuciÃ³n y orquestaciÃ³n. ([OpenAI Developers](https://developers.openai.com/api/docs/guides/agents?utm_source=chatgpt.com "Agents SDK | OpenAI API"))

[OpenAI â€” Building Agents](https://developers.openai.com/tracks/building-agents) â€“ Itinerario tÃ©cnico dedicado a la construcciÃ³n de agentes con herramientas, control de ejecuciÃ³n y trazabilidad. La arquitectura incorpora _tracing_ como mecanismo nativo para observar y depurar flujos agÃ©nticos. ([OpenAI Developers](https://developers.openai.com/tracks/building-agents?utm_source=chatgpt.com "Building agents"))

[OpenAI â€” Integrations and observability](https://developers.openai.com/api/docs/guides/agents/integrations-observability) â€“ DocumentaciÃ³n especÃ­fica sobre observabilidad del Agents SDK. Cada ejecuciÃ³n puede generar registros estructurados de llamadas al modelo, herramientas y otros pasos del flujo. ([OpenAI Developers](https://developers.openai.com/api/docs/guides/agents/integrations-observability?utm_source=chatgpt.com "Integrations and observability | OpenAI API"))

[OpenAI â€” The next evolution of the Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) â€“ DescripciÃ³n de la evoluciÃ³n del _agent harness_ hacia arquitecturas de horizonte prolongado, ejecuciÃ³n en _sandboxes_ y separaciÃ³n entre la capa de control del agente y la infraestructura de cÃ³mputo. ([OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/?utm_source=chatgpt.com "The next evolution of the Agents SDK"))

[Anthropic â€” Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) â€“ Referencia arquitectÃ³nica para diferenciar _workflows_ deterministas de agentes que deciden dinÃ¡micamente quÃ© pasos y herramientas utilizar. Examina patrones como _prompt chaining_, routing, paralelizaciÃ³n, _orchestrator-workers_ y _evaluator-optimizer_.

[Anthropic â€” Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) â€“ Estudio tÃ©cnico sobre arquitecturas capaces de continuar tareas durante periodos prolongados mediante administraciÃ³n de contexto, compactaciÃ³n, persistencia y recuperaciÃ³n del estado de trabajo. ([Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents?utm_source=chatgpt.com "Effective harnesses for long-running agents"))

[Anthropic â€” Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) â€“ Marco arquitectÃ³nico y de producto para agentes confiables basado en control humano, correspondencia con las expectativas del usuario, seguridad, transparencia y privacidad. ([Anthropic](https://www.anthropic.com/research/trustworthy-agents?utm_source=chatgpt.com "Trustworthy agents in practice"))

[Anthropic â€” Mitigating the risk of prompt injections in browser use](https://www.anthropic.com/research/prompt-injection-defenses) â€“ InvestigaciÃ³n especializada sobre uno de los principales problemas arquitectÃ³nicos de agentes con navegaciÃ³n: pÃ¡ginas y contenidos externos pueden actuar como vectores de _prompt injection_. ([Anthropic](https://www.anthropic.com/research/prompt-injection-defenses?utm_source=chatgpt.com "Mitigating the risk of prompt injections in browser use"))

[Anthropic â€” Code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) â€“ AnÃ¡lisis de una arquitectura en la que los agentes utilizan ejecuciÃ³n de cÃ³digo para interactuar de forma eficiente con numerosos servidores y herramientas MCP, reduciendo el volumen de definiciones y resultados que deben introducirse en contexto. ([Anthropic](https://www.anthropic.com/engineering/code-execution-with-mcp?utm_source=chatgpt.com "Code execution with MCP: building more efficient AI agents"))

[Google â€” Agent Development Kit](https://google.github.io/adk-docs/) â€“ Framework oficial para construcciÃ³n de agentes que permite evolucionar desde agentes sencillos con herramientas hacia sistemas multiagente, grafos de ejecuciÃ³n, evaluaciÃ³n y despliegue. ([Google GitHub](https://google.github.io/adk-docs/?utm_source=chatgpt.com "Agent Development Kit (ADK) - Agent Development Kit (ADK)"))

[Google â€” ADK Agents](https://google.github.io/adk-docs/agents/) â€“ DocumentaciÃ³n de los componentes de agente de ADK y de los mecanismos para combinar subagentes, nodos de ejecuciÃ³n y diferentes estructuras de control dentro de un sistema multiagente. ([Google GitHub](https://google.github.io/adk-docs/agents/?utm_source=chatgpt.com "Agents - Agent Development Kit (ADK)"))

[Google â€” Conversational Context: Session, State, and Memory](https://google.github.io/adk-docs/sessions/) â€“ Arquitectura de contexto de ADK basada en sesiones, estado y memoria. Resulta especialmente Ãºtil para diferenciar estado operativo de una ejecuciÃ³n, contexto conversacional y memoria persistente. ([Google GitHub](https://google.github.io/adk-docs/sessions/?utm_source=chatgpt.com "Conversational Context: Session, State, and Memory"))

[Google â€” ADK Evaluation](https://google.github.io/adk-docs/evaluate/) â€“ DocumentaciÃ³n sobre evaluaciÃ³n de agentes y sistemas multiagente, donde el resultado final puede depender de diversos subagentes y trayectorias internas de ejecuciÃ³n. ([Google GitHub](https://google.github.io/adk-docs/evaluate/?utm_source=chatgpt.com "Why evaluate agents - Agent Development Kit (ADK)"))

[Google â€” Safety and Security for AI Agents](https://google.github.io/adk-docs/safety/) â€“ Marco de seguridad multicapa para arquitecturas agentivas, relevante para proteger herramientas, datos, identidad, ejecuciÃ³n y acciones realizadas por agentes. ([Google GitHub](https://google.github.io/adk-docs/safety/?utm_source=chatgpt.com "Safety and Security for AI Agents"))

[Google â€” ADK with Agent2Agent Protocol](https://google.github.io/adk-docs/a2a/) â€“ GuÃ­a de integraciÃ³n de ADK con A2A para construir arquitecturas en las que agentes independientes pueden descubrirse, comunicarse y colaborar mediante un protocolo interoperable. ([Google GitHub](https://google.github.io/adk-docs/a2a/?utm_source=chatgpt.com "ADK with Agent2Agent (A2A) Protocol"))

[Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/) â€“ Framework de nueva generaciÃ³n de Microsoft que integra las abstracciones desarrolladas en AutoGen con capacidades empresariales procedentes de Semantic Kernel. AÃ±ade flujos basados en grafos, estado de sesiÃ³n, middleware, telemetrÃ­a y control explÃ­cito de la orquestaciÃ³n multiagente. ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/?utm_source=chatgpt.com "Microsoft Agent Framework Overview"))

[Microsoft â€” Semantic Kernel Agent Architecture](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-architecture) â€“ DescripciÃ³n formal de los componentes arquitectÃ³nicos de Semantic Kernel: agentes, hilos, mensajes, plugins, funciones y patrones de orquestaciÃ³n, incluida participaciÃ³n humana. ([Microsoft Learn](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-architecture?utm_source=chatgpt.com "Semantic Kernel Agent Architecture | Microsoft Learn"))

[Microsoft â€” Semantic Kernel Agent Orchestration](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-orchestration/) â€“ CatÃ¡logo de mecanismos para coordinar agentes especializados y construir flujos colaborativos sobre diferentes patrones de interacciÃ³n y delegaciÃ³n. ([Microsoft Learn](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-orchestration/?utm_source=chatgpt.com "Semantic Kernel Agent Orchestration - Microsoft Learn"))

[Microsoft AutoGen](https://microsoft.github.io/autogen/stable/) â€“ Framework de investigaciÃ³n y desarrollo para agentes y aplicaciones multiagente. Su arquitectura contempla tanto flujos deterministas como coordinaciÃ³n dinÃ¡mica entre agentes. ([Microsoft en GitHub](https://microsoft.github.io/autogen/stable//index.html?utm_source=chatgpt.com "AutoGen"))

[Microsoft AutoGen Core](https://microsoft.github.io/autogen/stable/user-guide/core-user-guide/index.html) â€“ Capa de bajo nivel de AutoGen orientada a sistemas agÃ©nticos distribuidos, dirigidos por eventos, escalables y resilientes. Resulta especialmente relevante para estudiar el modelo de actores aplicado a arquitecturas multiagente. ([Microsoft en GitHub](https://microsoft.github.io/autogen/stable//user-guide/core-user-guide/index.html?utm_source=chatgpt.com "Core â€” AutoGen"))

[LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) â€“ Framework para construir agentes con estado mediante grafos. Integra persistencia, memoria, ejecuciÃ³n duradera, intervenciÃ³n humana y observaciÃ³n detallada de las transiciones entre nodos.

[LangGraph â€” Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) â€“ DocumentaciÃ³n arquitectÃ³nica que modela agentes y flujos como grafos formados por estado, nodos y aristas, permitiendo representar routers, ciclos, subagentes y _handoffs_. ([Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/graph-api?utm_source=chatgpt.com "Graph API overview - Docs by LangChain"))

[LangGraph â€” Workflows and Agents](https://docs.langchain.com/oss/python/langgraph/workflows-agents) â€“ Recurso fundamental para distinguir entre rutas predeterminadas de _workflow_ y arquitecturas de agente en las que el modelo decide dinÃ¡micamente procesos y uso de herramientas. ([Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/workflows-agents?utm_source=chatgpt.com "Workflows and agents - Docs by LangChain"))

[LangChain â€” Multi-agent](https://docs.langchain.com/oss/python/langchain/multi-agent) â€“ DocumentaciÃ³n sobre patrones multiagente, especializaciÃ³n y control del contexto. Advierte ademÃ¡s que mÃºltiples agentes no son siempre necesarios y que un Ãºnico agente con herramientas adecuadas puede ser suficiente. ([Docs by LangChain](https://docs.langchain.com/oss/python/langchain/multi-agent?utm_source=chatgpt.com "Multi-agent - Docs by LangChain"))

[LangGraph â€” Persistence](https://docs.langchain.com/oss/python/langgraph/persistence) â€“ Arquitectura de persistencia basada en _checkpointers_ y _stores_. Permite reanudar ejecuciones, recuperarse de interrupciones y mantener memoria mÃ¡s allÃ¡ de una ejecuciÃ³n concreta. ([Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/persistence?utm_source=chatgpt.com "Persistence - Docs by LangChain"))

[CrewAI](https://docs.crewai.com/) â€“ Framework centrado en agentes, _crews_ y _flows_. Integra orquestaciÃ³n, memoria, conocimiento, guardrails y observabilidad dentro de una arquitectura orientada a equipos de agentes especializados. ([CrewAI Documentation](https://docs.crewai.com/?utm_source=chatgpt.com "CrewAI Documentation - CrewAI"))

[CrewAI â€” Flows](https://docs.crewai.com/en/concepts/flows) â€“ Capa para definir flujos estructurados y dirigidos por eventos alrededor de componentes agÃ©nticos, combinando pasos deterministas con delegaciÃ³n inteligente. ([CrewAI Documentation](https://docs.crewai.com/v1.15.5/en/enterprise/features/studio-flows?utm_source=chatgpt.com "Flows in Studio"))

[CrewAI â€” Checkpointing](https://docs.crewai.com/en/concepts/checkpointing) â€“ Sistema para guardar instantÃ¡neas del estado de ejecuciÃ³n y reanudar agentes, _crews_ o flujos despuÃ©s de fallos, requisito importante para arquitecturas de larga duraciÃ³n. ([CrewAI Documentation](https://docs.crewai.com/v1.15.6/en/concepts/checkpointing?utm_source=chatgpt.com "Checkpointing"))

[Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) â€“ EstÃ¡ndar abierto para conectar aplicaciones de IA con herramientas, bases de datos, archivos y flujos externos mediante una interfaz comÃºn. Constituye una de las principales capas de interoperabilidad entre agentes y recursos externos. ([Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro?utm_source=chatgpt.com "Model Context Protocol"))

[Model Context Protocol â€” Architecture](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture) â€“ EspecificaciÃ³n arquitectÃ³nica de MCP basada en host, clientes y servidores. Permite separar las aplicaciones agÃ©nticas de los sistemas que proporcionan datos, recursos y herramientas. ([Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture?utm_source=chatgpt.com "Architecture overview"))

[Agent2Agent Protocol â€” Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents) â€“ Protocolo abierto orientado a interoperabilidad entre agentes desarrollados mediante distintos proveedores, frameworks y plataformas. Complementa a MCP al centrarse en comunicaciÃ³n agente-agente. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents?utm_source=chatgpt.com "Linux Foundation Launches the Agent2Agent Protocol ..."))

[Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/) â€“ Plataforma gestionada para desplegar y operar arquitecturas agÃ©nticas utilizando diferentes frameworks y modelos. Integra runtime, memoria, herramientas, identidad y observabilidad. ([AWS Docs](https://docs.aws.amazon.com/bedrock-agentcore/?utm_source=chatgpt.com "Amazon Bedrock AgentCore Documentation"))

[NVIDIA NeMo Agent Toolkit](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html) â€“ Toolkit independiente del framework para construir, perfilar y optimizar agentes. Puede utilizarse junto con LangChain, LlamaIndex, CrewAI, Semantic Kernel, Google ADK y otras arquitecturas. ([NVIDIA Docs](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html?utm_source=chatgpt.com "NVIDIA NeMo Agent Toolkit Overview"))

# YOUTUBE

[OpenAI](https://www.youtube.com/@OpenAI) â€“ Canal oficial con presentaciones tÃ©cnicas sobre Agents SDK, herramientas, modelos, Codex, ejecuciÃ³n, seguridad y sistemas con capacidad de actuaciÃ³n.

[Anthropic](https://www.youtube.com/@anthropic-ai) â€“ Canal institucional con conferencias y presentaciones sobre Claude, _agent harnesses_, herramientas, MCP, contexto, seguridad y agentes de larga duraciÃ³n.

[Google for Developers](https://www.youtube.com/@GoogleDevelopers) â€“ Canal tÃ©cnico con sesiones dedicadas a Gemini, Agent Development Kit, herramientas, protocolos y arquitecturas multiagente. La documentaciÃ³n de ADK confirma su orientaciÃ³n explÃ­cita hacia orquestaciÃ³n y grafos de agentes. ([Google GitHub](https://google.github.io/adk-docs/?utm_source=chatgpt.com "Agent Development Kit (ADK) - Agent Development Kit (ADK)"))

[Google Cloud Tech](https://www.youtube.com/@googlecloudtech) â€“ Canal tÃ©cnico de Google Cloud con materiales sobre plataformas de agentes, arquitecturas distribuidas, Vertex AI y sistemas interoperables.

[Microsoft Developer](https://www.youtube.com/@MicrosoftDeveloper) â€“ Canal oficial para desarrolladores que documenta Microsoft Agent Framework, Semantic Kernel, Foundry y tecnologÃ­as de orquestaciÃ³n multiagente. ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/?utm_source=chatgpt.com "Microsoft Agent Framework Overview"))

[AWS Developers](https://www.youtube.com/@awsdevelopers) â€“ Canal de desarrollo de AWS con contenidos sobre Bedrock AgentCore, memoria, herramientas, despliegue y operaciÃ³n de agentes. ([AWS Docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html?utm_source=chatgpt.com "Overview - Amazon Bedrock AgentCore"))

[NVIDIA Developer](https://www.youtube.com/@NVIDIADeveloper) â€“ Material tÃ©cnico sobre arquitecturas agentivas, NeMo Agent Toolkit, inferencia, evaluaciÃ³n y despliegue de sistemas de agentes. ([NVIDIA Docs](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html?utm_source=chatgpt.com "NVIDIA NeMo Agent Toolkit Overview"))

[LangChain](https://www.youtube.com/@LangChain) â€“ Canal oficial con demostraciones y formaciÃ³n sobre LangGraph, memoria, persistencia, subagentes, _human-in-the-loop_, evaluaciÃ³n y observabilidad.

[CrewAI](https://www.youtube.com/@CrewAIInc) â€“ Canal del proyecto dedicado a agentes especializados, _crews_, flujos estructurados, herramientas y despliegue de arquitecturas multiagente.

[IBM Technology](https://www.youtube.com/@IBMTechnology) â€“ Canal educativo con explicaciones sobre patrones de orquestaciÃ³n, agentes especializados, RAG, memoria, herramientas y arquitecturas empresariales.

# PODCAST

[Latent Space: The AI Engineer Podcast](https://www.latent.space/podcast) â€“ Podcast tÃ©cnico sobre ingenierÃ­a de IA que cubre regularmente _agent harnesses_, herramientas, protocolos, coding agents, memoria, evaluaciÃ³n y arquitecturas para agentes de producciÃ³n.

[Practical AI](https://practicalai.fm/) â€“ Programa tÃ©cnico centrado en implementaciÃ³n de IA con episodios sobre agentes, MCP, orquestaciÃ³n, sistemas multiagente, herramientas y despliegue.

[The TWIML AI Podcast](https://twimlai.com/podcast/twimlai) â€“ Archivo de entrevistas con investigadores e ingenieros sobre agentes, sistemas multiagente, evaluaciÃ³n, razonamiento, planificaciÃ³n y arquitectura de sistemas.

[The Cognitive Revolution](https://www.cognitiverevolution.ai/) â€“ Conversaciones extensas sobre modelos avanzados, agentes autÃ³nomos, infraestructura, herramientas y organizaciÃ³n de sistemas de IA de larga duraciÃ³n.

[Gradient Dissent](https://wandb.ai/fully-connected/gradient-dissent) â€“ Podcast tÃ©cnico asociado a Weights & Biases con entrevistas sobre ingenierÃ­a de machine learning, evaluaciÃ³n y sistemas de IA en producciÃ³n, Ãºtil para la capa MLOps/AgentOps.

[Data Skeptic](https://dataskeptic.com/podcast) â€“ Podcast de ciencia de datos e IA que permite contextualizar arquitecturas de agentes dentro de sistemas de aprendizaje, decisiÃ³n y automatizaciÃ³n.

# LIBROS

[Artificial Intelligence: A Modern Approach](https://www.pearson.com/en-us/subject-catalog/p/artificial-intelligence-a-modern-approach/P200000003500) â€“ Stuart Russell y Peter Norvig. Manual fundamental para comprender el concepto clÃ¡sico de agente racional, percepciÃ³n, estado, acciÃ³n, bÃºsqueda, planificaciÃ³n, decisiÃ³n y sistemas multiagente.

[Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations](https://www.cambridge.org/core/books/multiagent-systems/BCBC75C1A625E3A25255E42B91C69268) â€“ Yoav Shoham y Kevin Leyton-Brown. Tratamiento formal de agentes mÃºltiples, interacciÃ³n estratÃ©gica, mecanismos, cooperaciÃ³n y teorÃ­a de juegos.

[Multiagent Systems: A Modern Approach to Distributed Artificial Intelligence](https://mitpress.mit.edu/9780262731317/multiagent-systems/) â€“ Gerhard Weiss, ed. Obra clÃ¡sica sobre arquitecturas distribuidas de agentes, coordinaciÃ³n, comunicaciÃ³n, negociaciÃ³n y organizaciÃ³n.

[Multiagent Systems](https://mitpress.mit.edu/9780262018890/multiagent-systems/) â€“ Gerhard Weiss, ed. Manual acadÃ©mico avanzado sobre autonomÃ­a, interacciÃ³n, coordinaciÃ³n, organizaciones y diseÃ±o de sociedades artificiales.

[Multi-Agent Oriented Programming](https://mitpress.mit.edu/9780262360661/multi-agent-oriented-programming/) â€“ Jomi Fred HÃ¼bner, Olivier Boissier y Rafael H. Bordini. Desarrollo sistemÃ¡tico de la programaciÃ³n orientada a agentes y de arquitecturas organizacionales multiagente.

[An Introduction to MultiAgent Systems](https://www.wiley.com/en-us/An+Introduction+to+MultiAgent+Systems%2C+2nd+Edition-p-9780470519462) â€“ Michael Wooldridge. Referencia acadÃ©mica para fundamentos de agentes inteligentes, interacciÃ³n, cooperaciÃ³n, comunicaciÃ³n y lÃ³gica de sistemas multiagente.

[Human Compatible](https://www.penguinrandomhouse.com/books/566677/human-compatible-by-stuart-russell/) â€“ Stuart Russell. AnÃ¡lisis del diseÃ±o de sistemas autÃ³nomos, objetivos, control y compatibilidad entre comportamiento de agentes y preferencias humanas.

[Building Applications with AI Agents](https://www.oreilly.com/library/view/building-applications-with/9781098176495/) â€“ Manual aplicado sobre modelos, herramientas, memoria y mecanismos de coordinaciÃ³n necesarios para construir aplicaciones agÃ©nticas.

[An Illustrated Guide to AI Agents](https://www.oreilly.com/library/view/an-illustrated-guide/9798341662681/) â€“ Maarten Grootendorst y Jay Alammar. IntroducciÃ³n visual a los componentes internos de agentes contemporÃ¡neos, herramientas, razonamiento y patrones de ejecuciÃ³n.

[AI Agents in Action](https://www.manning.com/books/ai-agents-in-action) â€“ Obra prÃ¡ctica sobre implementaciÃ³n de agentes LLM, herramientas, razonamiento, memoria y coordinaciÃ³n de tareas.

[Building Agentic AI Systems](https://www.packtpub.com/en-us/product/building-agentic-ai-systems-9781803238753) â€“ Tratamiento aplicado de planificaciÃ³n, herramientas, memoria y orquestaciÃ³n en sistemas de IA con comportamiento dirigido por objetivos.

[Designing Machine Learning Systems](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) â€“ Chip Huyen. Aunque no estÃ¡ limitado a agentes, proporciona fundamentos de arquitectura, datos, evaluaciÃ³n, monitorizaciÃ³n y despliegue necesarios para diseÃ±ar sistemas agÃ©nticos robustos.

[Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) â€“ Martin Kleppmann. Referencia esencial para la capa distribuida de arquitecturas agentivas: estado, mensajerÃ­a, consistencia, almacenamiento, eventos y tolerancia a fallos.

[Release It!](https://pragprog.com/titles/mnee2/release-it-second-edition/) â€“ Michael T. Nygard. Obra de arquitectura de producciÃ³n sobre resiliencia, aislamiento, estabilidad y patrones de fallo, principios especialmente relevantes cuando agentes ejecutan acciones sobre sistemas reales.

# REVISTAS

[Autonomous Agents and Multi-Agent Systems](https://link.springer.com/journal/10458) â€“ Revista cientÃ­fica especializada especÃ­ficamente en agentes autÃ³nomos y sistemas multiagente, con trabajos sobre arquitectura, coordinaciÃ³n, negociaciÃ³n, interacciÃ³n y aprendizaje.

[Journal of Artificial Intelligence Research](https://www.jair.org/) â€“ PublicaciÃ³n acadÃ©mica abierta sobre inteligencia artificial que incluye planificaciÃ³n, razonamiento, agentes, aprendizaje y sistemas autÃ³nomos.

[Artificial Intelligence](https://www.sciencedirect.com/journal/artificial-intelligence) â€“ Revista cientÃ­fica histÃ³rica del campo, relevante para fundamentos teÃ³ricos de planificaciÃ³n, razonamiento, agentes inteligentes y autonomÃ­a.

[ACM Transactions on Autonomous and Adaptive Systems](https://dl.acm.org/journal/taas) â€“ Revista de ACM especializada en sistemas autÃ³nomos, distribuidos, adaptativos y autoorganizados.

[ACM Transactions on Intelligent Systems and Technology](https://dl.acm.org/journal/tist) â€“ InvestigaciÃ³n sobre sistemas inteligentes, aprendizaje automÃ¡tico, arquitecturas de IA y aplicaciones avanzadas.

[IEEE Transactions on Artificial Intelligence](https://cis.ieee.org/publications/t-artificial-intelligence) â€“ PublicaciÃ³n cientÃ­fica de IEEE sobre fundamentos y sistemas de inteligencia artificial, incluidos agentes, decisiÃ³n y aprendizaje.

[IEEE Intelligent Systems](https://www.computer.org/csdl/magazine/ex) â€“ Revista profesional y cientÃ­fica especialmente relevante para agentes inteligentes, sistemas autÃ³nomos, razonamiento y aplicaciones.

[ACM Computing Surveys](https://dl.acm.org/journal/csur) â€“ Revista de revisiones sistemÃ¡ticas de ACM donde pueden localizarse estados del arte sobre agentes LLM, sistemas multiagente, RAG, planificaciÃ³n y arquitecturas relacionadas.

[Nature Machine Intelligence](https://www.nature.com/natmachintell/) â€“ Revista interdisciplinar sobre inteligencia artificial, aprendizaje y robÃ³tica que proporciona investigaciÃ³n avanzada sobre autonomÃ­a y sistemas inteligentes.

[Journal of Machine Learning Research](https://www.jmlr.org/) â€“ PublicaciÃ³n abierta de referencia en aprendizaje automÃ¡tico, particularmente Ãºtil para las capas de aprendizaje, evaluaciÃ³n y decisiÃ³n incorporadas en arquitecturas agentivas.

# MUSEOS

[Computer History Museum](https://computerhistory.org/) â€“ Centro documental fundamental para reconstruir la genealogÃ­a de la inteligencia artificial, computaciÃ³n interactiva, sistemas expertos y arquitecturas de software que preceden a los agentes contemporÃ¡neos.

[MIT Museum](https://mitmuseum.mit.edu/) â€“ Museo universitario con colecciones sobre computaciÃ³n, inteligencia artificial, robÃ³tica e interacciÃ³n desarrolladas dentro del ecosistema del Massachusetts Institute of Technology.

[Science Museum â€” Computing](https://www.sciencemuseum.org.uk/objects-and-stories/computing) â€“ Colecciones britÃ¡nicas sobre computaciÃ³n, automatizaciÃ³n y sistemas inteligentes Ãºtiles para contextualizar histÃ³ricamente la arquitectura de agentes.

[The National Museum of Computing](https://www.tnmoc.org/) â€“ Museo dedicado a la historia de sistemas programables y computaciÃ³n, relevante para estudiar la evoluciÃ³n desde procesamiento centralizado hacia sistemas interactivos y distribuidos.

[Heinz Nixdorf MuseumsForum](https://www.hnf.de/) â€“ Museo alemÃ¡n de historia de la informaciÃ³n y la computaciÃ³n, con valor documental para situar la evoluciÃ³n del software, redes y automatizaciÃ³n.

# UNIVERSIDADES

[MIT Computer Science and Artificial Intelligence Laboratory](https://www.csail.mit.edu/) â€“ Centro histÃ³rico y contemporÃ¡neo de referencia para IA, robÃ³tica, sistemas distribuidos, interacciÃ³n y arquitecturas autÃ³nomas.

[Stanford Artificial Intelligence Laboratory](https://ai.stanford.edu/) â€“ Laboratorio universitario de referencia internacional en inteligencia artificial, agentes, aprendizaje, razonamiento y robÃ³tica.

[Stanford Institute for Human-Centered Artificial Intelligence](https://hai.stanford.edu/) â€“ Instituto interdisciplinar relevante para arquitecturas de agentes por sus trabajos sobre evaluaciÃ³n, gobernanza, interacciÃ³n humano-IA y despliegue responsable.

[Carnegie Mellon University â€” School of Computer Science](https://www.cs.cmu.edu/) â€“ InstituciÃ³n histÃ³rica en inteligencia artificial, planificaciÃ³n, sistemas autÃ³nomos, agentes, robÃ³tica y arquitectura de software.

[University of California, Berkeley â€” Berkeley Artificial Intelligence Research](https://bair.berkeley.edu/) â€“ Laboratorio dedicado a aprendizaje, robÃ³tica, agentes y sistemas inteligentes, con importante producciÃ³n en planificaciÃ³n y reinforcement learning.

[University of Oxford â€” Department of Computer Science](https://www.cs.ox.ac.uk/) â€“ Centro europeo con investigaciÃ³n en agentes, multiagentes, razonamiento, sistemas autÃ³nomos, machine learning y seguridad.

[University College London â€” Centre for Artificial Intelligence](https://www.ucl.ac.uk/ai-centre/) â€“ Centro multidisciplinar en IA con investigaciÃ³n relacionada con agentes, aprendizaje, decisiÃ³n y sistemas adaptativos.

[National University of Singapore â€” Artificial Intelligence Institute](https://ai.nus.edu.sg/) â€“ Instituto asiÃ¡tico de referencia para investigaciÃ³n en IA, razonamiento, modelos y aplicaciones de sistemas inteligentes.

[Tsinghua University â€” Institute for Artificial Intelligence](https://ai.tsinghua.edu.cn/) â€“ Instituto universitario chino dedicado a investigaciÃ³n avanzada en modelos, agentes, aprendizaje y sistemas de inteligencia artificial.

[Australian National University â€” School of Computing](https://comp.anu.edu.au/) â€“ Centro australiano con investigaciÃ³n en inteligencia artificial, sistemas autÃ³nomos, razonamiento y ciencias de la computaciÃ³n.

# ASOCIACIONES

[International Foundation for Autonomous Agents and Multiagent Systems](https://www.ifaamas.org/) â€“ OrganizaciÃ³n cientÃ­fica especializada directamente en agentes autÃ³nomos y sistemas multiagente y responsable de la comunidad internacional asociada a AAMAS.

[Association for the Advancement of Artificial Intelligence](https://aaai.org/) â€“ AsociaciÃ³n acadÃ©mica internacional de IA con investigaciÃ³n sobre agentes, planificaciÃ³n, razonamiento, aprendizaje y sistemas autÃ³nomos.

[Association for Computing Machinery](https://www.acm.org/) â€“ AsociaciÃ³n profesional de informÃ¡tica con grupos, conferencias y revistas dedicados a IA, sistemas distribuidos, arquitectura de software y computaciÃ³n autÃ³noma.

[ACM SIGAI](https://sigai.acm.org/) â€“ Grupo especializado de ACM en inteligencia artificial, relevante para investigaciÃ³n y prÃ¡ctica profesional sobre agentes y sistemas inteligentes.

[IEEE Computer Society](https://www.computer.org/) â€“ Sociedad internacional con publicaciones, estÃ¡ndares y conferencias sobre arquitectura de software, sistemas distribuidos e inteligencia artificial.

[IEEE Computational Intelligence Society](https://cis.ieee.org/) â€“ Sociedad cientÃ­fica centrada en inteligencia computacional, aprendizaje, sistemas adaptativos y tecnologÃ­as autÃ³nomas.

[Linux Foundation â€” Agent2Agent Protocol](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents) â€“ Proyecto de estandarizaciÃ³n abierto para comunicaciÃ³n interoperable entre agentes desarrollados en distintos ecosistemas. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents?utm_source=chatgpt.com "Linux Foundation Launches the Agent2Agent Protocol ..."))

[Linux Foundation â€” AGNTCY](https://www.linuxfoundation.org/press/linux-foundation-welcomes-the-agntcy-project-to-standardize-open-multi-agent-system-infrastructure-and-break-down-ai-agent-silos) â€“ Proyecto de infraestructura multiagente dedicado a descubrimiento, identidad, mensajerÃ­a y observabilidad entre agentes heterogÃ©neos. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-welcomes-the-agntcy-project-to-standardize-open-multi-agent-system-infrastructure-and-break-down-ai-agent-silos?utm_source=chatgpt.com "Linux Foundation Welcomes the AGNTCY Project to ..."))

[Model Context Protocol Community](https://modelcontextprotocol.io/community/communication) â€“ Comunidad responsable de la evoluciÃ³n del protocolo MCP, sus grupos de trabajo, especificaciÃ³n y mecanismos de gobernanza. La documentaciÃ³n oficial mantiene ademÃ¡s un grupo especÃ­fico dedicado a agentes. ([Model Context Protocol](https://modelcontextprotocol.io/llms.txt?ref=mcp.bar\&utm_source=chatgpt.com "llms.txt"))

[OpenTelemetry](https://opentelemetry.io/) â€“ Proyecto abierto de observabilidad para trazas, mÃ©tricas y logs. Resulta relevante para _AgentOps_ porque las plataformas agÃ©nticas de producciÃ³n necesitan instrumentar ejecuciones distribuidas y herramientas.

# NEWSLETTER

[Latent Space](https://www.latent.space/) â€“ Newsletter tÃ©cnica sobre ingenierÃ­a de IA con seguimiento de agentes, _harnesses_, context engineering, herramientas, coding agents, protocolos y arquitectura.

[The Batch](https://www.deeplearning.ai/the-batch/) â€“ BoletÃ­n de DeepLearning.AI que documenta la evoluciÃ³n de modelos, agentes, herramientas y aplicaciones de IA.

[Import AI](https://importai.substack.com/) â€“ Newsletter de Jack Clark sobre investigaciÃ³n y desarrollo de inteligencia artificial, especialmente Ãºtil para seguimiento de agentes, autonomÃ­a y evoluciÃ³n de capacidades.

[MIT Technology Review â€” The Algorithm](https://www.technologyreview.com/newsletters/the-algorithm/) â€“ BoletÃ­n dedicado a IA con anÃ¡lisis sobre sistemas agÃ©nticos, modelos, infraestructura y aplicaciones.

[LangChain Blog](https://blog.langchain.com/) â€“ Publicaciones del ecosistema LangChain sobre LangGraph, agentes, memoria, observabilidad, context engineering y patrones de producciÃ³n.

[OpenAI News](https://openai.com/news/) â€“ Fuente oficial para seguir modificaciones del Agents SDK, herramientas, modelos y arquitectura de agentes de OpenAI. ([OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/?utm_source=chatgpt.com "The next evolution of the Agents SDK"))

[Anthropic News](https://www.anthropic.com/news) â€“ Publicaciones oficiales sobre Claude, MCP, herramientas, context engineering y sistemas de agentes.

[Google Developers Blog](https://developers.googleblog.com/) â€“ Actualizaciones tÃ©cnicas sobre Gemini, ADK, protocolos y herramientas para arquitecturas agentivas.

[Microsoft Research Blog](https://www.microsoft.com/en-us/research/blog/) â€“ Publicaciones sobre agentes, sistemas multiagente, AutoGen y arquitectura de inteligencia artificial.

[AWS News Blog â€” Machine Learning](https://aws.amazon.com/blogs/machine-learning/) â€“ InformaciÃ³n tÃ©cnica sobre Bedrock, AgentCore, arquitecturas de agentes y operaciÃ³n de sistemas de IA en infraestructura AWS.

# TV

[Microsoft Reactor](https://developer.microsoft.com/en-us/reactor/) â€“ Plataforma audiovisual de Microsoft con sesiones tÃ©cnicas sobre Agent Framework, Semantic Kernel, Azure, Foundry y arquitectura de agentes.

[AWS Events](https://aws.amazon.com/events/) â€“ Archivo audiovisual de conferencias y sesiones tÃ©cnicas sobre Amazon Bedrock AgentCore y despliegue de sistemas agÃ©nticos.

[NVIDIA On-Demand](https://www.nvidia.com/en-us/on-demand/) â€“ Biblioteca de sesiones tÃ©cnicas de NVIDIA sobre agentes, inferencia, infraestructura, NeMo y arquitecturas de producciÃ³n.

[Google Cloud Events](https://cloud.google.com/events) â€“ Sesiones y conferencias sobre Gemini, Vertex AI, Agent Development Kit y arquitecturas empresariales de agentes.

[IBM Technology](https://www.ibm.com/think/videos) â€“ Archivo audiovisual de IBM sobre arquitectura empresarial, agentic AI, orquestaciÃ³n y automatizaciÃ³n.

# RADIO

No se han localizado emisoras de radio especializadas de forma sostenida en **arquitectura agÃ©ntica de IA** con suficiente profundidad tÃ©cnica para incorporarlas como fuentes documentales de referencia. La producciÃ³n sonora especializada se concentra actualmente en podcasts, conferencias y canales tÃ©cnicos institucionales.

# PRENSA ONLINE

[MIT Technology Review â€” Artificial Intelligence](https://www.technologyreview.com/topic/artificial-intelligence/) â€“ Cobertura de modelos, agentes, infraestructura, seguridad y evoluciÃ³n de arquitecturas de inteligencia artificial.

[IEEE Spectrum â€” Artificial Intelligence](https://spectrum.ieee.org/artificial-intelligence) â€“ InformaciÃ³n tÃ©cnica sobre agentes, robÃ³tica, sistemas autÃ³nomos, infraestructura y arquitectura computacional.

[Communications of the ACM](https://cacm.acm.org/) â€“ PublicaciÃ³n profesional y acadÃ©mica para seguir evoluciÃ³n de arquitecturas de IA, sistemas autÃ³nomos, ingenierÃ­a de software y agentes.

[InfoQ â€” AI, ML & Data Engineering](https://www.infoq.com/ai-ml-data-eng/) â€“ PublicaciÃ³n especialmente Ãºtil para arquitectura de software e ingenierÃ­a de sistemas de IA, incluidos agentes, herramientas, arquitecturas distribuidas y plataformas de producciÃ³n.

[The New Stack â€” AI](https://thenewstack.io/ai/) â€“ Cobertura tÃ©cnica orientada a desarrolladores sobre infraestructura de IA, agentes, sistemas distribuidos, observabilidad y herramientas de producciÃ³n.

[Oâ€™Reilly Radar](https://www.oreilly.com/radar/) â€“ AnÃ¡lisis tÃ©cnico sobre arquitectura de sistemas, ingenierÃ­a de software e inteligencia artificial aplicada, con atenciÃ³n creciente a agentic AI.

[LangChain Blog](https://blog.langchain.com/) â€“ Fuente primaria del ecosistema LangGraph y LangChain para nuevos patrones de agentes, memoria, evaluaciÃ³n, observabilidad y gestiÃ³n del contexto.

[Microsoft Research](https://www.microsoft.com/en-us/research/) â€“ Fuente institucional para seguir investigaciÃ³n sobre agentes y sistemas multiagente vinculados a AutoGen y Microsoft Agent Framework. ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/?utm_source=chatgpt.com "Microsoft Agent Framework Overview"))

[IBM Think â€” Agentic Architecture](https://www.ibm.com/think/topics/agentic-architecture) â€“ Recurso especÃ­ficamente centrado en estructura y diseÃ±o de frameworks agÃ©nticos y en la organizaciÃ³n de flujos de trabajo automatizados alrededor de modelos y agentes. ([IBM](https://www.ibm.com/think/topics/agentic-architecture?utm_source=chatgpt.com "What Is Agentic Architecture? | IBM"))

[NVIDIA â€” AI-Q Research Agent Blueprint](https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint/latest/introduction.html) â€“ Arquitectura de referencia validada para agentes de investigaciÃ³n, diseÃ±ada para conectar modelos, bÃºsqueda, recuperaciÃ³n, herramientas, evaluaciÃ³n e infraestructura escalable. ([NVIDIA Docs](https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint/latest/introduction.html?utm_source=chatgpt.com "Introduction â€” AI-Q Research Agent Blueprint"))

# PRENSA ESCRITA

[MIT Technology Review](https://www.technologyreview.com/) â€“ Revista especializada en tecnologÃ­as emergentes con cobertura continuada de agentes, modelos, infraestructura y transformaciÃ³n de la ingenierÃ­a de IA.

[IEEE Spectrum](https://spectrum.ieee.org/) â€“ PublicaciÃ³n profesional de IEEE sobre ingenierÃ­a, computaciÃ³n e inteligencia artificial, valiosa para arquitectura tÃ©cnica y sistemas autÃ³nomos.

[Communications of the ACM](https://cacm.acm.org/) â€“ Revista de Association for Computing Machinery que conecta investigaciÃ³n, ingenierÃ­a de software y prÃ¡ctica profesional en sistemas inteligentes.

[ACM Queue](https://queue.acm.org/) â€“ Revista tÃ©cnica de ACM particularmente relevante para arquitectura de software, sistemas distribuidos, fiabilidad y plataformas que sirven de infraestructura a agentes de producciÃ³n.

[Harvard Data Science Review](https://hdsr.mitpress.mit.edu/) â€“ PublicaciÃ³n interdisciplinar de ciencia de datos e IA con trabajos sobre organizaciÃ³n, sistemas inteligentes y aplicaciones avanzadas.

[Nature Machine Intelligence](https://www.nature.com/natmachintell/) â€“ Revista acadÃ©mica sobre inteligencia artificial, aprendizaje, robÃ³tica y autonomÃ­a con valor para estudiar las bases cientÃ­ficas de arquitecturas agentivas.

[AI Magazine](https://onlinelibrary.wiley.com/journal/23719621) â€“ PublicaciÃ³n de Association for the Advancement of Artificial Intelligence dedicada a investigaciÃ³n y evoluciÃ³n del campo, incluidos agentes inteligentes y sistemas multiagente.

[IEEE Intelligent Systems](https://www.computer.org/csdl/magazine/ex) â€“ Revista especializada directamente vinculada a agentes, sistemas inteligentes, razonamiento y arquitecturas autÃ³nomas.

[Oâ€™Reilly Radar](https://www.oreilly.com/radar/) â€“ PublicaciÃ³n tÃ©cnica sobre evoluciÃ³n de arquitectura de software, sistemas distribuidos e IA aplicada, especialmente Ãºtil para seguir la transiciÃ³n desde aplicaciones LLM simples a plataformas agentivas.

[InfoQ](https://www.infoq.com/) â€“ Revista profesional para arquitectos y desarrolladores de software que documenta patrones, plataformas y decisiones de arquitectura relacionadas con IA y sistemas distribuidos.
