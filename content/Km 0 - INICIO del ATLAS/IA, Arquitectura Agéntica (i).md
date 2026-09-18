---
publish: true
created: 2026-07-12T14:33:20.319Z
modified: 2026-09-18T09:36:22.495Z
---

#IA #Agéntica #Agentes  #Índices

[![Choosing the Right AI Agent Framework: LangGraph vs CrewAI vs AutoGen — Agent Mag](https://images.openai.com/static-rsc-4/tqnHC0INRbuSj_oQBJSeGBuLWIFKy0JwyBMrBHhn5juIZIrBijswEBCX1I6SmtuLIC0dcj71H2xatRVzkA4VcnvCLg9vE55bBaFvX27F8lEPZwP8YcC09AIj-M3xCqnlvDUulKCXIiGSsQ5ybxDyfXe0km-D3tUT8vt_1QbPz10?purpose=inline)](https://agentmag.dev/articles/choosing-the-right-ai-agent-framework-langgraph-vs-crewai-vs-autogen?utm_source=chatgpt.com)

# ARQUITECTURA AGÉNTICA DE IA

✅ Enlaces verificados y operativos en la fecha de elaboración del informe. Algunos recursos pueden requerir registro, suscripción o acceso institucional.

# [Wikipedia](https://es.wikipedia.org/wiki/Agente_de_inteligencia_artificial)

# WEB

[OpenAI — Agents SDK](https://developers.openai.com/api/docs/guides/agents) – Documentación oficial para construir arquitecturas agénticas en las que el servidor controla despliegue, estado, herramientas y aprobaciones mientras el SDK gestiona el bucle de ejecución del agente. Es una referencia central para _tool calling_, _handoffs_, contexto, ejecución y orquestación. ([OpenAI Developers](https://developers.openai.com/api/docs/guides/agents?utm_source=chatgpt.com "Agents SDK | OpenAI API"))

[OpenAI — Building Agents](https://developers.openai.com/tracks/building-agents) – Itinerario técnico dedicado a la construcción de agentes con herramientas, control de ejecución y trazabilidad. La arquitectura incorpora _tracing_ como mecanismo nativo para observar y depurar flujos agénticos. ([OpenAI Developers](https://developers.openai.com/tracks/building-agents?utm_source=chatgpt.com "Building agents"))

[OpenAI — Integrations and observability](https://developers.openai.com/api/docs/guides/agents/integrations-observability) – Documentación específica sobre observabilidad del Agents SDK. Cada ejecución puede generar registros estructurados de llamadas al modelo, herramientas y otros pasos del flujo. ([OpenAI Developers](https://developers.openai.com/api/docs/guides/agents/integrations-observability?utm_source=chatgpt.com "Integrations and observability | OpenAI API"))

[OpenAI — The next evolution of the Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) – Descripción de la evolución del _agent harness_ hacia arquitecturas de horizonte prolongado, ejecución en _sandboxes_ y separación entre la capa de control del agente y la infraestructura de cómputo. ([OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/?utm_source=chatgpt.com "The next evolution of the Agents SDK"))

[Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) – Referencia arquitectónica para diferenciar _workflows_ deterministas de agentes que deciden dinámicamente qué pasos y herramientas utilizar. Examina patrones como _prompt chaining_, routing, paralelización, _orchestrator-workers_ y _evaluator-optimizer_.

[Anthropic — Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) – Estudio técnico sobre arquitecturas capaces de continuar tareas durante periodos prolongados mediante administración de contexto, compactación, persistencia y recuperación del estado de trabajo. ([Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents?utm_source=chatgpt.com "Effective harnesses for long-running agents"))

[Anthropic — Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) – Marco arquitectónico y de producto para agentes confiables basado en control humano, correspondencia con las expectativas del usuario, seguridad, transparencia y privacidad. ([Anthropic](https://www.anthropic.com/research/trustworthy-agents?utm_source=chatgpt.com "Trustworthy agents in practice"))

[Anthropic — Mitigating the risk of prompt injections in browser use](https://www.anthropic.com/research/prompt-injection-defenses) – Investigación especializada sobre uno de los principales problemas arquitectónicos de agentes con navegación: páginas y contenidos externos pueden actuar como vectores de _prompt injection_. ([Anthropic](https://www.anthropic.com/research/prompt-injection-defenses?utm_source=chatgpt.com "Mitigating the risk of prompt injections in browser use"))

[Anthropic — Code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) – Análisis de una arquitectura en la que los agentes utilizan ejecución de código para interactuar de forma eficiente con numerosos servidores y herramientas MCP, reduciendo el volumen de definiciones y resultados que deben introducirse en contexto. ([Anthropic](https://www.anthropic.com/engineering/code-execution-with-mcp?utm_source=chatgpt.com "Code execution with MCP: building more efficient AI agents"))

[Google — Agent Development Kit](https://google.github.io/adk-docs/) – Framework oficial para construcción de agentes que permite evolucionar desde agentes sencillos con herramientas hacia sistemas multiagente, grafos de ejecución, evaluación y despliegue. ([Google GitHub](https://google.github.io/adk-docs/?utm_source=chatgpt.com "Agent Development Kit (ADK) - Agent Development Kit (ADK)"))

[Google — ADK Agents](https://google.github.io/adk-docs/agents/) – Documentación de los componentes de agente de ADK y de los mecanismos para combinar subagentes, nodos de ejecución y diferentes estructuras de control dentro de un sistema multiagente. ([Google GitHub](https://google.github.io/adk-docs/agents/?utm_source=chatgpt.com "Agents - Agent Development Kit (ADK)"))

[Google — Conversational Context: Session, State, and Memory](https://google.github.io/adk-docs/sessions/) – Arquitectura de contexto de ADK basada en sesiones, estado y memoria. Resulta especialmente útil para diferenciar estado operativo de una ejecución, contexto conversacional y memoria persistente. ([Google GitHub](https://google.github.io/adk-docs/sessions/?utm_source=chatgpt.com "Conversational Context: Session, State, and Memory"))

[Google — ADK Evaluation](https://google.github.io/adk-docs/evaluate/) – Documentación sobre evaluación de agentes y sistemas multiagente, donde el resultado final puede depender de diversos subagentes y trayectorias internas de ejecución. ([Google GitHub](https://google.github.io/adk-docs/evaluate/?utm_source=chatgpt.com "Why evaluate agents - Agent Development Kit (ADK)"))

[Google — Safety and Security for AI Agents](https://google.github.io/adk-docs/safety/) – Marco de seguridad multicapa para arquitecturas agentivas, relevante para proteger herramientas, datos, identidad, ejecución y acciones realizadas por agentes. ([Google GitHub](https://google.github.io/adk-docs/safety/?utm_source=chatgpt.com "Safety and Security for AI Agents"))

[Google — ADK with Agent2Agent Protocol](https://google.github.io/adk-docs/a2a/) – Guía de integración de ADK con A2A para construir arquitecturas en las que agentes independientes pueden descubrirse, comunicarse y colaborar mediante un protocolo interoperable. ([Google GitHub](https://google.github.io/adk-docs/a2a/?utm_source=chatgpt.com "ADK with Agent2Agent (A2A) Protocol"))

[Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/) – Framework de nueva generación de Microsoft que integra las abstracciones desarrolladas en AutoGen con capacidades empresariales procedentes de Semantic Kernel. Añade flujos basados en grafos, estado de sesión, middleware, telemetría y control explícito de la orquestación multiagente. ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/?utm_source=chatgpt.com "Microsoft Agent Framework Overview"))

[Microsoft — Semantic Kernel Agent Architecture](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-architecture) – Descripción formal de los componentes arquitectónicos de Semantic Kernel: agentes, hilos, mensajes, plugins, funciones y patrones de orquestación, incluida participación humana. ([Microsoft Learn](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-architecture?utm_source=chatgpt.com "Semantic Kernel Agent Architecture | Microsoft Learn"))

[Microsoft — Semantic Kernel Agent Orchestration](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-orchestration/) – Catálogo de mecanismos para coordinar agentes especializados y construir flujos colaborativos sobre diferentes patrones de interacción y delegación. ([Microsoft Learn](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-orchestration/?utm_source=chatgpt.com "Semantic Kernel Agent Orchestration - Microsoft Learn"))

[Microsoft AutoGen](https://microsoft.github.io/autogen/stable/) – Framework de investigación y desarrollo para agentes y aplicaciones multiagente. Su arquitectura contempla tanto flujos deterministas como coordinación dinámica entre agentes. ([Microsoft en GitHub](https://microsoft.github.io/autogen/stable//index.html?utm_source=chatgpt.com "AutoGen"))

[Microsoft AutoGen Core](https://microsoft.github.io/autogen/stable/user-guide/core-user-guide/index.html) – Capa de bajo nivel de AutoGen orientada a sistemas agénticos distribuidos, dirigidos por eventos, escalables y resilientes. Resulta especialmente relevante para estudiar el modelo de actores aplicado a arquitecturas multiagente. ([Microsoft en GitHub](https://microsoft.github.io/autogen/stable//user-guide/core-user-guide/index.html?utm_source=chatgpt.com "Core — AutoGen"))

[LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) – Framework para construir agentes con estado mediante grafos. Integra persistencia, memoria, ejecución duradera, intervención humana y observación detallada de las transiciones entre nodos.

[LangGraph — Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) – Documentación arquitectónica que modela agentes y flujos como grafos formados por estado, nodos y aristas, permitiendo representar routers, ciclos, subagentes y _handoffs_. ([Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/graph-api?utm_source=chatgpt.com "Graph API overview - Docs by LangChain"))

[LangGraph — Workflows and Agents](https://docs.langchain.com/oss/python/langgraph/workflows-agents) – Recurso fundamental para distinguir entre rutas predeterminadas de _workflow_ y arquitecturas de agente en las que el modelo decide dinámicamente procesos y uso de herramientas. ([Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/workflows-agents?utm_source=chatgpt.com "Workflows and agents - Docs by LangChain"))

[LangChain — Multi-agent](https://docs.langchain.com/oss/python/langchain/multi-agent) – Documentación sobre patrones multiagente, especialización y control del contexto. Advierte además que múltiples agentes no son siempre necesarios y que un único agente con herramientas adecuadas puede ser suficiente. ([Docs by LangChain](https://docs.langchain.com/oss/python/langchain/multi-agent?utm_source=chatgpt.com "Multi-agent - Docs by LangChain"))

[LangGraph — Persistence](https://docs.langchain.com/oss/python/langgraph/persistence) – Arquitectura de persistencia basada en _checkpointers_ y _stores_. Permite reanudar ejecuciones, recuperarse de interrupciones y mantener memoria más allá de una ejecución concreta. ([Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/persistence?utm_source=chatgpt.com "Persistence - Docs by LangChain"))

[CrewAI](https://docs.crewai.com/) – Framework centrado en agentes, _crews_ y _flows_. Integra orquestación, memoria, conocimiento, guardrails y observabilidad dentro de una arquitectura orientada a equipos de agentes especializados. ([CrewAI Documentation](https://docs.crewai.com/?utm_source=chatgpt.com "CrewAI Documentation - CrewAI"))

[CrewAI — Flows](https://docs.crewai.com/en/concepts/flows) – Capa para definir flujos estructurados y dirigidos por eventos alrededor de componentes agénticos, combinando pasos deterministas con delegación inteligente. ([CrewAI Documentation](https://docs.crewai.com/v1.15.5/en/enterprise/features/studio-flows?utm_source=chatgpt.com "Flows in Studio"))

[CrewAI — Checkpointing](https://docs.crewai.com/en/concepts/checkpointing) – Sistema para guardar instantáneas del estado de ejecución y reanudar agentes, _crews_ o flujos después de fallos, requisito importante para arquitecturas de larga duración. ([CrewAI Documentation](https://docs.crewai.com/v1.15.6/en/concepts/checkpointing?utm_source=chatgpt.com "Checkpointing"))

[Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) – Estándar abierto para conectar aplicaciones de IA con herramientas, bases de datos, archivos y flujos externos mediante una interfaz común. Constituye una de las principales capas de interoperabilidad entre agentes y recursos externos. ([Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro?utm_source=chatgpt.com "Model Context Protocol"))

[Model Context Protocol — Architecture](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture) – Especificación arquitectónica de MCP basada en host, clientes y servidores. Permite separar las aplicaciones agénticas de los sistemas que proporcionan datos, recursos y herramientas. ([Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture?utm_source=chatgpt.com "Architecture overview"))

[Agent2Agent Protocol — Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents) – Protocolo abierto orientado a interoperabilidad entre agentes desarrollados mediante distintos proveedores, frameworks y plataformas. Complementa a MCP al centrarse en comunicación agente-agente. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents?utm_source=chatgpt.com "Linux Foundation Launches the Agent2Agent Protocol ..."))

[Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/) – Plataforma gestionada para desplegar y operar arquitecturas agénticas utilizando diferentes frameworks y modelos. Integra runtime, memoria, herramientas, identidad y observabilidad. ([AWS Docs](https://docs.aws.amazon.com/bedrock-agentcore/?utm_source=chatgpt.com "Amazon Bedrock AgentCore Documentation"))

[NVIDIA NeMo Agent Toolkit](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html) – Toolkit independiente del framework para construir, perfilar y optimizar agentes. Puede utilizarse junto con LangChain, LlamaIndex, CrewAI, Semantic Kernel, Google ADK y otras arquitecturas. ([NVIDIA Docs](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html?utm_source=chatgpt.com "NVIDIA NeMo Agent Toolkit Overview"))

# YOUTUBE

[OpenAI](https://www.youtube.com/@OpenAI) – Canal oficial con presentaciones técnicas sobre Agents SDK, herramientas, modelos, Codex, ejecución, seguridad y sistemas con capacidad de actuación.

[Anthropic](https://www.youtube.com/@anthropic-ai) – Canal institucional con conferencias y presentaciones sobre Claude, _agent harnesses_, herramientas, MCP, contexto, seguridad y agentes de larga duración.

[Google for Developers](https://www.youtube.com/@GoogleDevelopers) – Canal técnico con sesiones dedicadas a Gemini, Agent Development Kit, herramientas, protocolos y arquitecturas multiagente. La documentación de ADK confirma su orientación explícita hacia orquestación y grafos de agentes. ([Google GitHub](https://google.github.io/adk-docs/?utm_source=chatgpt.com "Agent Development Kit (ADK) - Agent Development Kit (ADK)"))

[Google Cloud Tech](https://www.youtube.com/@googlecloudtech) – Canal técnico de Google Cloud con materiales sobre plataformas de agentes, arquitecturas distribuidas, Vertex AI y sistemas interoperables.

[Microsoft Developer](https://www.youtube.com/@MicrosoftDeveloper) – Canal oficial para desarrolladores que documenta Microsoft Agent Framework, Semantic Kernel, Foundry y tecnologías de orquestación multiagente. ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/?utm_source=chatgpt.com "Microsoft Agent Framework Overview"))

[AWS Developers](https://www.youtube.com/@awsdevelopers) – Canal de desarrollo de AWS con contenidos sobre Bedrock AgentCore, memoria, herramientas, despliegue y operación de agentes. ([AWS Docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html?utm_source=chatgpt.com "Overview - Amazon Bedrock AgentCore"))

[NVIDIA Developer](https://www.youtube.com/@NVIDIADeveloper) – Material técnico sobre arquitecturas agentivas, NeMo Agent Toolkit, inferencia, evaluación y despliegue de sistemas de agentes. ([NVIDIA Docs](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html?utm_source=chatgpt.com "NVIDIA NeMo Agent Toolkit Overview"))

[LangChain](https://www.youtube.com/@LangChain) – Canal oficial con demostraciones y formación sobre LangGraph, memoria, persistencia, subagentes, _human-in-the-loop_, evaluación y observabilidad.

[CrewAI](https://www.youtube.com/@CrewAIInc) – Canal del proyecto dedicado a agentes especializados, _crews_, flujos estructurados, herramientas y despliegue de arquitecturas multiagente.

[IBM Technology](https://www.youtube.com/@IBMTechnology) – Canal educativo con explicaciones sobre patrones de orquestación, agentes especializados, RAG, memoria, herramientas y arquitecturas empresariales.

# PODCAST

[Latent Space: The AI Engineer Podcast](https://www.latent.space/podcast) – Podcast técnico sobre ingeniería de IA que cubre regularmente _agent harnesses_, herramientas, protocolos, coding agents, memoria, evaluación y arquitecturas para agentes de producción.

[Practical AI](https://practicalai.fm/) – Programa técnico centrado en implementación de IA con episodios sobre agentes, MCP, orquestación, sistemas multiagente, herramientas y despliegue.

[The TWIML AI Podcast](https://twimlai.com/podcast/twimlai) – Archivo de entrevistas con investigadores e ingenieros sobre agentes, sistemas multiagente, evaluación, razonamiento, planificación y arquitectura de sistemas.

[The Cognitive Revolution](https://www.cognitiverevolution.ai/) – Conversaciones extensas sobre modelos avanzados, agentes autónomos, infraestructura, herramientas y organización de sistemas de IA de larga duración.

[Gradient Dissent](https://wandb.ai/fully-connected/gradient-dissent) – Podcast técnico asociado a Weights & Biases con entrevistas sobre ingeniería de machine learning, evaluación y sistemas de IA en producción, útil para la capa MLOps/AgentOps.

[Data Skeptic](https://dataskeptic.com/podcast) – Podcast de ciencia de datos e IA que permite contextualizar arquitecturas de agentes dentro de sistemas de aprendizaje, decisión y automatización.

# LIBROS

[Artificial Intelligence: A Modern Approach](https://www.pearson.com/en-us/subject-catalog/p/artificial-intelligence-a-modern-approach/P200000003500) – Stuart Russell y Peter Norvig. Manual fundamental para comprender el concepto clásico de agente racional, percepción, estado, acción, búsqueda, planificación, decisión y sistemas multiagente.

[Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations](https://www.cambridge.org/core/books/multiagent-systems/BCBC75C1A625E3A25255E42B91C69268) – Yoav Shoham y Kevin Leyton-Brown. Tratamiento formal de agentes múltiples, interacción estratégica, mecanismos, cooperación y teoría de juegos.

[Multiagent Systems: A Modern Approach to Distributed Artificial Intelligence](https://mitpress.mit.edu/9780262731317/multiagent-systems/) – Gerhard Weiss, ed. Obra clásica sobre arquitecturas distribuidas de agentes, coordinación, comunicación, negociación y organización.

[Multiagent Systems](https://mitpress.mit.edu/9780262018890/multiagent-systems/) – Gerhard Weiss, ed. Manual académico avanzado sobre autonomía, interacción, coordinación, organizaciones y diseño de sociedades artificiales.

[Multi-Agent Oriented Programming](https://mitpress.mit.edu/9780262360661/multi-agent-oriented-programming/) – Jomi Fred Hübner, Olivier Boissier y Rafael H. Bordini. Desarrollo sistemático de la programación orientada a agentes y de arquitecturas organizacionales multiagente.

[An Introduction to MultiAgent Systems](https://www.wiley.com/en-us/An+Introduction+to+MultiAgent+Systems%2C+2nd+Edition-p-9780470519462) – Michael Wooldridge. Referencia académica para fundamentos de agentes inteligentes, interacción, cooperación, comunicación y lógica de sistemas multiagente.

[Human Compatible](https://www.penguinrandomhouse.com/books/566677/human-compatible-by-stuart-russell/) – Stuart Russell. Análisis del diseño de sistemas autónomos, objetivos, control y compatibilidad entre comportamiento de agentes y preferencias humanas.

[Building Applications with AI Agents](https://www.oreilly.com/library/view/building-applications-with/9781098176495/) – Manual aplicado sobre modelos, herramientas, memoria y mecanismos de coordinación necesarios para construir aplicaciones agénticas.

[An Illustrated Guide to AI Agents](https://www.oreilly.com/library/view/an-illustrated-guide/9798341662681/) – Maarten Grootendorst y Jay Alammar. Introducción visual a los componentes internos de agentes contemporáneos, herramientas, razonamiento y patrones de ejecución.

[AI Agents in Action](https://www.manning.com/books/ai-agents-in-action) – Obra práctica sobre implementación de agentes LLM, herramientas, razonamiento, memoria y coordinación de tareas.

[Building Agentic AI Systems](https://www.packtpub.com/en-us/product/building-agentic-ai-systems-9781803238753) – Tratamiento aplicado de planificación, herramientas, memoria y orquestación en sistemas de IA con comportamiento dirigido por objetivos.

[Designing Machine Learning Systems](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) – Chip Huyen. Aunque no está limitado a agentes, proporciona fundamentos de arquitectura, datos, evaluación, monitorización y despliegue necesarios para diseñar sistemas agénticos robustos.

[Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) – Martin Kleppmann. Referencia esencial para la capa distribuida de arquitecturas agentivas: estado, mensajería, consistencia, almacenamiento, eventos y tolerancia a fallos.

[Release It!](https://pragprog.com/titles/mnee2/release-it-second-edition/) – Michael T. Nygard. Obra de arquitectura de producción sobre resiliencia, aislamiento, estabilidad y patrones de fallo, principios especialmente relevantes cuando agentes ejecutan acciones sobre sistemas reales.

# REVISTAS

[Autonomous Agents and Multi-Agent Systems](https://link.springer.com/journal/10458) – Revista científica especializada específicamente en agentes autónomos y sistemas multiagente, con trabajos sobre arquitectura, coordinación, negociación, interacción y aprendizaje.

[Journal of Artificial Intelligence Research](https://www.jair.org/) – Publicación académica abierta sobre inteligencia artificial que incluye planificación, razonamiento, agentes, aprendizaje y sistemas autónomos.

[Artificial Intelligence](https://www.sciencedirect.com/journal/artificial-intelligence) – Revista científica histórica del campo, relevante para fundamentos teóricos de planificación, razonamiento, agentes inteligentes y autonomía.

[ACM Transactions on Autonomous and Adaptive Systems](https://dl.acm.org/journal/taas) – Revista de ACM especializada en sistemas autónomos, distribuidos, adaptativos y autoorganizados.

[ACM Transactions on Intelligent Systems and Technology](https://dl.acm.org/journal/tist) – Investigación sobre sistemas inteligentes, aprendizaje automático, arquitecturas de IA y aplicaciones avanzadas.

[IEEE Transactions on Artificial Intelligence](https://cis.ieee.org/publications/t-artificial-intelligence) – Publicación científica de IEEE sobre fundamentos y sistemas de inteligencia artificial, incluidos agentes, decisión y aprendizaje.

[IEEE Intelligent Systems](https://www.computer.org/csdl/magazine/ex) – Revista profesional y científica especialmente relevante para agentes inteligentes, sistemas autónomos, razonamiento y aplicaciones.

[ACM Computing Surveys](https://dl.acm.org/journal/csur) – Revista de revisiones sistemáticas de ACM donde pueden localizarse estados del arte sobre agentes LLM, sistemas multiagente, RAG, planificación y arquitecturas relacionadas.

[Nature Machine Intelligence](https://www.nature.com/natmachintell/) – Revista interdisciplinar sobre inteligencia artificial, aprendizaje y robótica que proporciona investigación avanzada sobre autonomía y sistemas inteligentes.

[Journal of Machine Learning Research](https://www.jmlr.org/) – Publicación abierta de referencia en aprendizaje automático, particularmente útil para las capas de aprendizaje, evaluación y decisión incorporadas en arquitecturas agentivas.

# MUSEOS

[Computer History Museum](https://computerhistory.org/) – Centro documental fundamental para reconstruir la genealogía de la inteligencia artificial, computación interactiva, sistemas expertos y arquitecturas de software que preceden a los agentes contemporáneos.

[MIT Museum](https://mitmuseum.mit.edu/) – Museo universitario con colecciones sobre computación, inteligencia artificial, robótica e interacción desarrolladas dentro del ecosistema del Massachusetts Institute of Technology.

[Science Museum — Computing](https://www.sciencemuseum.org.uk/objects-and-stories/computing) – Colecciones británicas sobre computación, automatización y sistemas inteligentes útiles para contextualizar históricamente la arquitectura de agentes.

[The National Museum of Computing](https://www.tnmoc.org/) – Museo dedicado a la historia de sistemas programables y computación, relevante para estudiar la evolución desde procesamiento centralizado hacia sistemas interactivos y distribuidos.

[Heinz Nixdorf MuseumsForum](https://www.hnf.de/) – Museo alemán de historia de la información y la computación, con valor documental para situar la evolución del software, redes y automatización.

# UNIVERSIDADES

[MIT Computer Science and Artificial Intelligence Laboratory](https://www.csail.mit.edu/) – Centro histórico y contemporáneo de referencia para IA, robótica, sistemas distribuidos, interacción y arquitecturas autónomas.

[Stanford Artificial Intelligence Laboratory](https://ai.stanford.edu/) – Laboratorio universitario de referencia internacional en inteligencia artificial, agentes, aprendizaje, razonamiento y robótica.

[Stanford Institute for Human-Centered Artificial Intelligence](https://hai.stanford.edu/) – Instituto interdisciplinar relevante para arquitecturas de agentes por sus trabajos sobre evaluación, gobernanza, interacción humano-IA y despliegue responsable.

[Carnegie Mellon University — School of Computer Science](https://www.cs.cmu.edu/) – Institución histórica en inteligencia artificial, planificación, sistemas autónomos, agentes, robótica y arquitectura de software.

[University of California, Berkeley — Berkeley Artificial Intelligence Research](https://bair.berkeley.edu/) – Laboratorio dedicado a aprendizaje, robótica, agentes y sistemas inteligentes, con importante producción en planificación y reinforcement learning.

[University of Oxford — Department of Computer Science](https://www.cs.ox.ac.uk/) – Centro europeo con investigación en agentes, multiagentes, razonamiento, sistemas autónomos, machine learning y seguridad.

[University College London — Centre for Artificial Intelligence](https://www.ucl.ac.uk/ai-centre/) – Centro multidisciplinar en IA con investigación relacionada con agentes, aprendizaje, decisión y sistemas adaptativos.

[National University of Singapore — Artificial Intelligence Institute](https://ai.nus.edu.sg/) – Instituto asiático de referencia para investigación en IA, razonamiento, modelos y aplicaciones de sistemas inteligentes.

[Tsinghua University — Institute for Artificial Intelligence](https://ai.tsinghua.edu.cn/) – Instituto universitario chino dedicado a investigación avanzada en modelos, agentes, aprendizaje y sistemas de inteligencia artificial.

[Australian National University — School of Computing](https://comp.anu.edu.au/) – Centro australiano con investigación en inteligencia artificial, sistemas autónomos, razonamiento y ciencias de la computación.

# ASOCIACIONES

[International Foundation for Autonomous Agents and Multiagent Systems](https://www.ifaamas.org/) – Organización científica especializada directamente en agentes autónomos y sistemas multiagente y responsable de la comunidad internacional asociada a AAMAS.

[Association for the Advancement of Artificial Intelligence](https://aaai.org/) – Asociación académica internacional de IA con investigación sobre agentes, planificación, razonamiento, aprendizaje y sistemas autónomos.

[Association for Computing Machinery](https://www.acm.org/) – Asociación profesional de informática con grupos, conferencias y revistas dedicados a IA, sistemas distribuidos, arquitectura de software y computación autónoma.

[ACM SIGAI](https://sigai.acm.org/) – Grupo especializado de ACM en inteligencia artificial, relevante para investigación y práctica profesional sobre agentes y sistemas inteligentes.

[IEEE Computer Society](https://www.computer.org/) – Sociedad internacional con publicaciones, estándares y conferencias sobre arquitectura de software, sistemas distribuidos e inteligencia artificial.

[IEEE Computational Intelligence Society](https://cis.ieee.org/) – Sociedad científica centrada en inteligencia computacional, aprendizaje, sistemas adaptativos y tecnologías autónomas.

[Linux Foundation — Agent2Agent Protocol](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents) – Proyecto de estandarización abierto para comunicación interoperable entre agentes desarrollados en distintos ecosistemas. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents?utm_source=chatgpt.com "Linux Foundation Launches the Agent2Agent Protocol ..."))

[Linux Foundation — AGNTCY](https://www.linuxfoundation.org/press/linux-foundation-welcomes-the-agntcy-project-to-standardize-open-multi-agent-system-infrastructure-and-break-down-ai-agent-silos) – Proyecto de infraestructura multiagente dedicado a descubrimiento, identidad, mensajería y observabilidad entre agentes heterogéneos. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-welcomes-the-agntcy-project-to-standardize-open-multi-agent-system-infrastructure-and-break-down-ai-agent-silos?utm_source=chatgpt.com "Linux Foundation Welcomes the AGNTCY Project to ..."))

[Model Context Protocol Community](https://modelcontextprotocol.io/community/communication) – Comunidad responsable de la evolución del protocolo MCP, sus grupos de trabajo, especificación y mecanismos de gobernanza. La documentación oficial mantiene además un grupo específico dedicado a agentes. ([Model Context Protocol](https://modelcontextprotocol.io/llms.txt?ref=mcp.bar\&utm_source=chatgpt.com "llms.txt"))

[OpenTelemetry](https://opentelemetry.io/) – Proyecto abierto de observabilidad para trazas, métricas y logs. Resulta relevante para _AgentOps_ porque las plataformas agénticas de producción necesitan instrumentar ejecuciones distribuidas y herramientas.

# NEWSLETTER

[Latent Space](https://www.latent.space/) – Newsletter técnica sobre ingeniería de IA con seguimiento de agentes, _harnesses_, context engineering, herramientas, coding agents, protocolos y arquitectura.

[The Batch](https://www.deeplearning.ai/the-batch/) – Boletín de DeepLearning.AI que documenta la evolución de modelos, agentes, herramientas y aplicaciones de IA.

[Import AI](https://importai.substack.com/) – Newsletter de Jack Clark sobre investigación y desarrollo de inteligencia artificial, especialmente útil para seguimiento de agentes, autonomía y evolución de capacidades.

[MIT Technology Review — The Algorithm](https://www.technologyreview.com/newsletters/the-algorithm/) – Boletín dedicado a IA con análisis sobre sistemas agénticos, modelos, infraestructura y aplicaciones.

[LangChain Blog](https://blog.langchain.com/) – Publicaciones del ecosistema LangChain sobre LangGraph, agentes, memoria, observabilidad, context engineering y patrones de producción.

[OpenAI News](https://openai.com/news/) – Fuente oficial para seguir modificaciones del Agents SDK, herramientas, modelos y arquitectura de agentes de OpenAI. ([OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/?utm_source=chatgpt.com "The next evolution of the Agents SDK"))

[Anthropic News](https://www.anthropic.com/news) – Publicaciones oficiales sobre Claude, MCP, herramientas, context engineering y sistemas de agentes.

[Google Developers Blog](https://developers.googleblog.com/) – Actualizaciones técnicas sobre Gemini, ADK, protocolos y herramientas para arquitecturas agentivas.

[Microsoft Research Blog](https://www.microsoft.com/en-us/research/blog/) – Publicaciones sobre agentes, sistemas multiagente, AutoGen y arquitectura de inteligencia artificial.

[AWS News Blog — Machine Learning](https://aws.amazon.com/blogs/machine-learning/) – Información técnica sobre Bedrock, AgentCore, arquitecturas de agentes y operación de sistemas de IA en infraestructura AWS.

# TV

[Microsoft Reactor](https://developer.microsoft.com/en-us/reactor/) – Plataforma audiovisual de Microsoft con sesiones técnicas sobre Agent Framework, Semantic Kernel, Azure, Foundry y arquitectura de agentes.

[AWS Events](https://aws.amazon.com/events/) – Archivo audiovisual de conferencias y sesiones técnicas sobre Amazon Bedrock AgentCore y despliegue de sistemas agénticos.

[NVIDIA On-Demand](https://www.nvidia.com/en-us/on-demand/) – Biblioteca de sesiones técnicas de NVIDIA sobre agentes, inferencia, infraestructura, NeMo y arquitecturas de producción.

[Google Cloud Events](https://cloud.google.com/events) – Sesiones y conferencias sobre Gemini, Vertex AI, Agent Development Kit y arquitecturas empresariales de agentes.

[IBM Technology](https://www.ibm.com/think/videos) – Archivo audiovisual de IBM sobre arquitectura empresarial, agentic AI, orquestación y automatización.

# RADIO

No se han localizado emisoras de radio especializadas de forma sostenida en **arquitectura agéntica de IA** con suficiente profundidad técnica para incorporarlas como fuentes documentales de referencia. La producción sonora especializada se concentra actualmente en podcasts, conferencias y canales técnicos institucionales.

# PRENSA ONLINE

[MIT Technology Review — Artificial Intelligence](https://www.technologyreview.com/topic/artificial-intelligence/) – Cobertura de modelos, agentes, infraestructura, seguridad y evolución de arquitecturas de inteligencia artificial.

[IEEE Spectrum — Artificial Intelligence](https://spectrum.ieee.org/artificial-intelligence) – Información técnica sobre agentes, robótica, sistemas autónomos, infraestructura y arquitectura computacional.

[Communications of the ACM](https://cacm.acm.org/) – Publicación profesional y académica para seguir evolución de arquitecturas de IA, sistemas autónomos, ingeniería de software y agentes.

[InfoQ — AI, ML & Data Engineering](https://www.infoq.com/ai-ml-data-eng/) – Publicación especialmente útil para arquitectura de software e ingeniería de sistemas de IA, incluidos agentes, herramientas, arquitecturas distribuidas y plataformas de producción.

[The New Stack — AI](https://thenewstack.io/ai/) – Cobertura técnica orientada a desarrolladores sobre infraestructura de IA, agentes, sistemas distribuidos, observabilidad y herramientas de producción.

[O’Reilly Radar](https://www.oreilly.com/radar/) – Análisis técnico sobre arquitectura de sistemas, ingeniería de software e inteligencia artificial aplicada, con atención creciente a agentic AI.

[LangChain Blog](https://blog.langchain.com/) – Fuente primaria del ecosistema LangGraph y LangChain para nuevos patrones de agentes, memoria, evaluación, observabilidad y gestión del contexto.

[Microsoft Research](https://www.microsoft.com/en-us/research/) – Fuente institucional para seguir investigación sobre agentes y sistemas multiagente vinculados a AutoGen y Microsoft Agent Framework. ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/?utm_source=chatgpt.com "Microsoft Agent Framework Overview"))

[IBM Think — Agentic Architecture](https://www.ibm.com/think/topics/agentic-architecture) – Recurso específicamente centrado en estructura y diseño de frameworks agénticos y en la organización de flujos de trabajo automatizados alrededor de modelos y agentes. ([IBM](https://www.ibm.com/think/topics/agentic-architecture?utm_source=chatgpt.com "What Is Agentic Architecture? | IBM"))

[NVIDIA — AI-Q Research Agent Blueprint](https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint/latest/introduction.html) – Arquitectura de referencia validada para agentes de investigación, diseñada para conectar modelos, búsqueda, recuperación, herramientas, evaluación e infraestructura escalable. ([NVIDIA Docs](https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint/latest/introduction.html?utm_source=chatgpt.com "Introduction — AI-Q Research Agent Blueprint"))

# PRENSA ESCRITA

[MIT Technology Review](https://www.technologyreview.com/) – Revista especializada en tecnologías emergentes con cobertura continuada de agentes, modelos, infraestructura y transformación de la ingeniería de IA.

[IEEE Spectrum](https://spectrum.ieee.org/) – Publicación profesional de IEEE sobre ingeniería, computación e inteligencia artificial, valiosa para arquitectura técnica y sistemas autónomos.

[Communications of the ACM](https://cacm.acm.org/) – Revista de Association for Computing Machinery que conecta investigación, ingeniería de software y práctica profesional en sistemas inteligentes.

[ACM Queue](https://queue.acm.org/) – Revista técnica de ACM particularmente relevante para arquitectura de software, sistemas distribuidos, fiabilidad y plataformas que sirven de infraestructura a agentes de producción.

[Harvard Data Science Review](https://hdsr.mitpress.mit.edu/) – Publicación interdisciplinar de ciencia de datos e IA con trabajos sobre organización, sistemas inteligentes y aplicaciones avanzadas.

[Nature Machine Intelligence](https://www.nature.com/natmachintell/) – Revista académica sobre inteligencia artificial, aprendizaje, robótica y autonomía con valor para estudiar las bases científicas de arquitecturas agentivas.

[AI Magazine](https://onlinelibrary.wiley.com/journal/23719621) – Publicación de Association for the Advancement of Artificial Intelligence dedicada a investigación y evolución del campo, incluidos agentes inteligentes y sistemas multiagente.

[IEEE Intelligent Systems](https://www.computer.org/csdl/magazine/ex) – Revista especializada directamente vinculada a agentes, sistemas inteligentes, razonamiento y arquitecturas autónomas.

[O’Reilly Radar](https://www.oreilly.com/radar/) – Publicación técnica sobre evolución de arquitectura de software, sistemas distribuidos e IA aplicada, especialmente útil para seguir la transición desde aplicaciones LLM simples a plataformas agentivas.

[InfoQ](https://www.infoq.com/) – Revista profesional para arquitectos y desarrolladores de software que documenta patrones, plataformas y decisiones de arquitectura relacionadas con IA y sistemas distribuidos.
