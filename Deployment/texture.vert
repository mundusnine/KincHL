pos  tex $Globals  mvp     ,   DXBChѕЁюшЂЧ§т	ев   d9     8   є   @    р  \  RDEFД      H          ўџ     <                              $Globals ЋЋЋ<      `   0           x       ,      |       mvp             Microsoft (R) HLSL Shader Compiler 10.1 ISGND         8                    8                  TEXCOORD ЋЋЋOSGNP         8                    A                   TEXCOORD SV_Position ЋЋЋSHDR@  @  P   Y  F         _  2     _  2    e  2      g  ђ        h     6  2      F    6       @    ?6  2      F     6  B      @     ?        F     F                  :      @    ?8  B     :      @     ?       F     F            "     F     F         >  STATt   
                                                                                                              SPDB 6  Microsoft C/C++ MSF 7.00
DS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Рџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџ8  јџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџ       <       џџџџ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         .1ЁvЂ_   "ЮМсN
БNВ_sжbRА                          мQ3                                                                                                                                                                                                                                                                                                                                                                                                                                                                    pos.x, pos.y, 0.5f), mvp), 1.0f);
    texcoord = tex;
    gl_Position.z = (gl_Position.z + gl_Position.w) * 0.5;
}

SPIRV_Cross_Output main(SPIRV_Cross_Input stage_input)
{
    pos = stage_input.pos;
    tex = stage_input.tex;
    vert_main();
    SPIRV_Cross_Output stage_output;
    stage_output.gl_Position = gl_Position;
    stage_output.texcoord = texcoord;
    return stage_output;
}
        G      H                                                                                                      Lш u у  h  &ї ЦZ  >  СУ  й* ,  P & М Z  БХ                                                                                                                                                                                                                                                                                                                                                                                                                                                                     uniform float3x3 mvp;

static float4 gl_Position;
static float3 pos;
static float2 texcoord;
static float2 tex;

struct SPIRV_Cross_Input
{
    float3 pos : TEXCOORD0;
    float2 tex : TEXCOORD1;
};

struct SPIRV_Cross_Output
{
    float2 texcoord : TEXCOORD0;
    float4 gl_Position : SV_Position;
};

void vert_main()
{
    gl_Position = float4(mul(float3(pos.x, pos.y, 0.5f), mvp), 1.0f);
    texcoord = tex;
    gl_Position.z = (gl_Position.z + gl_Position.w) * 0.5;
}

SPIRV_Cross_Output main(SPIRV_Cross_Input stage_input)
{
    pos = stage_input.pos;
    tex = stage_input.tex;
    vert_main();
    SPIRV_Cross_Output stage_output;
    stage_output.gl_Position = gl_Position;
    stage_output.texcoord = texcoord;
    return stage_output;
}
                                                                                                                                                                                                                                                                                    ўяўя   {   C:\Users\horseboy\Development\Projects\KincHL\build\texture.vert.hlsl  c:\users\horseboy\development\projects\kinchl\build\texture.vert.hlsl uniform float3x3 mvp;

static float4 gl_Position;
static float3 pos;
static float2 texcoord;
static float2 tex;

struct SPIRV_Cross_Input
{
    float3 pos : TEXCOORD0;
    float2 tex : TEXCOORD1;
};

struct SPIRV_Cross_Output
{
    float2 texcoord : TEXCOORD0;
    float4 gl_Position : SV_Position;
};

void vert_main()
{
    gl_Position = float4(mul(float3(т0   ,ИЫGВж                                                               H   (   т0CЋBXь     G   H                                                                                                                                                                                                                                                                                                                                                                                                                  B <   
  "aJ
  "aJMicrosoft (R) HLSL Shader Compiler 10.1   6 =hlslFlags 0x1 hlslTarget vs_4_0 hlslEntry main     *           ь       ь   	  T     main 2 >  	 stage_input                                P     T    ь      P    T    ь     P    T    ь     P    T    ь     P    T    ь    : >   <main return value>                                P    T    ь     P    T    ь     P    T    ь     P    T    ь     P     T    ь      P    T    ь    2 >   gl_Position                                P     Ф        F M         	E(:HE@8 	=| 	2H	9	=@2 >   gl_Position                                P     Ф         N   R       џџџџџџgl_Position є         уЧИGЖЃаЧвQ§  ђ           @         ќ   T   #  T   #   h   #  h   #   |     |                 Є     Є      Ф     Ф      р     р      ќ     ќ               <  #  <  #                                           і                              ,                                                                                                                                                                                                                                                                                                                                                                                               Ъ18        l  
 џџ   џџ     <   <      D        @       float3 ѓђё @       float2 ѓђё"       pos ђё    tex ђё&               SPIRV_Cross_Input 
       @       float4 ѓђё.      texcoord ё    gl_Position ђё*               SPIRV_Cross_Output ѓђё
            
       
         @             , float3x3 
     
                                                                                                 })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Ъ18            џџ   џџ                            vert_main ђё                                                                                                                                                                                                                                                                                                                                                                                                                                                D3DSHDR @                             `                    vert_main ђё                                                                                                                                                                                                                                                                                                                                                                                                                                                џџџџ	/ё                 -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           %        main   Q       џџџџџџmvp  R       џџџџџџgl_Position                                                                                                                                                                                                                                                                                                                                                                                                                                                                                џџџџ	/ё                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .1ЁvЂ_   "ЮМсN
БNВ_sжbRАs   /LinkInfo /names /src/headerblock /src/files/c:\users\horseboy\development\projects\kinchl\build\texture.vert.hlsl                 "            
                 мQ3                                                                                                                                                                                                                                                                                                                 џџџџw	1      ?\   L       ,   T                                    @     `             	 ,      H                 main none   -К.ё       @     `                    џџџџ    @        џџџџ    џџџџ         C:\Users\horseboy\Development\Projects\KincHL\build\texture.vert.hlsl   ўяўя                  џџџџџџџџџџ џџџџџџџџџџ                                                                                                                                                                            Я   Є  [  P       Ћ     ь    D      (   8  ,   L                  
            	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            