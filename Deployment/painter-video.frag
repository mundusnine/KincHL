 _tex_sampler  tex   DXBC=ЛaX;йЁ,Сс	Ы   Ј8     8   и   $  X  $     RDEF                  џџ  m   \                            i            џџџџ          _tex_sampler tex Microsoft (R) HLSL Shader Compiler 10.1 ЋЋЋISGND         8                    8                  TEXCOORD ЋЋЋOSGN,                               SV_Target ЋЋSHDRФ   @   1   Z   `     X  p     UU  b ђ     b 2    e  ђ      h     E  	ђ      F    F~      `     8  ђ      F     F     8  r      F     і     6        :      >  STATt                                                                                                                SPDB 6  Microsoft C/C++ MSF 7.00
DS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Рџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџ8  ќџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџџ       <       џџџџ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         .1ЃvЂ_   ђЖ­ьмuDЬ|ЎЯбс                          мQ3                                                                                                                                                                                                                                                                                                                                                                                                                                                                    color = tex.Sample(_tex_sampler, texCoord) * color;
    float3 _32 = texcolor.xyz * color.w;
    texcolor = float4(_32.x, _32.y, _32.z, texcolor.w);
    FragColor = texcolor;
}

SPIRV_Cross_Output main(SPIRV_Cross_Input stage_input)
{
    texCoord = stage_input.texCoord;
    color = stage_input.color;
    frag_main();
    SPIRV_Cross_Output stage_output;
    stage_output.FragColor = FragColor;
    return stage_output;
}
           M   N                                                                    ЦZ  u ЃЗ h  &ї } СУ  1ћ Јб  P гc  бШ С! AЙ Ї 1 }к                                                                                                                                                                                                                                                                                                                                                                                                                                                            Texture2D<float4> tex : register(t0);
SamplerState _tex_sampler : register(s0);

static float2 texCoord;
static float4 color;
static float4 FragColor;

struct SPIRV_Cross_Input
{
    float4 color : TEXCOORD0;
    float2 texCoord : TEXCOORD1;
};

struct SPIRV_Cross_Output
{
    float4 FragColor : SV_Target0;
};

void frag_main()
{
    float4 texcolor = tex.Sample(_tex_sampler, texCoord) * color;
    float3 _32 = texcolor.xyz * color.w;
    texcolor = float4(_32.x, _32.y, _32.z, texcolor.w);
    FragColor = texcolor;
}

SPIRV_Cross_Output main(SPIRV_Cross_Input stage_input)
{
    texCoord = stage_input.texCoord;
    color = stage_input.color;
    frag_main();
    SPIRV_Cross_Output stage_output;
    stage_output.FragColor = FragColor;
    return stage_output;
}
                                                                                                                                                                                                                                                              ўяўя      C:\Users\horseboy\Development\Projects\KincHL\build\painter-video.frag.hlsl  c:\users\horseboy\development\projects\kinchl\build\painter-video.frag.hlsl Texture2D<float4> tex : register(t0);
SamplerState _tex_sampler : register(s0);

static float2 texCoord;
static float4 color;
static float4 FragColor;

struct SPIRV_Cross_Input
{
    float4 color : TEXCOORD0;
    float2 texCoord : TEXCOORD1;
};

struct SPIRV_Cross_Output
{
    float4 FragColor : SV_Target0;
};

void frag_main()
{
    float4 texт0   лHВж                                                               N   (   т0дЃЧ     M   N                                                                                                                                                                                                                                                                                                                                                                                                                  B <   
  "aJ
  "aJMicrosoft (R) HLSL Shader Compiler 10.1   6 =hlslFlags 0x1 hlslTarget ps_4_0 hlslEntry main     *     и      t       t     P     main 2 >  	 stage_input                                P     P    t      P    P    t     P    P    t     P    P    t     P    P    t     P    P    t    : >   <main return value>                                P     P    t      P    P    t     P    P    t     P    P    t    6 M   д      	A (@ 	8P0@$	'  . >    texcolor                               P          0      P         0     P         0     P         0     N  є         mtћ0ШDшd[yA ^  ђ            Ф       
      P     P      t     t                 Ќ   "  Ќ   "   Р   "  Р   "                       і                              ,                                                                       Ъ18        X  
 џџ   џџ     D   D      L        @       float4 ѓђё @       float2 ѓђё&       color     texCoord ё&               SPIRV_Cross_Input 
             FragColor *               SPIRV_Cross_Output ѓђё
            
       	            a  ђё
     
          
a  ђё
     
                                                                                                                     )K                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Ъ18            џџ   џџ                          
  frag_main ђё                                                                                                                                                                                                                                                                                                                                                                                                                                                D3DSHDR Ф                              `                  
  frag_main ђё                                                                                                                                                                                                                                                                                                                                                                                                                                                џџџџ	/ё     -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       %        main   Q   џџџџ  џџџџtex " Q   џџџџџџ  џџ_tex_sampler                                                                                                                                                                                                                                                                                                                                                                                                                                                                               џџџџ	/ё                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .1ЃvЂ_   ђЖ­ьмuDЬ|ЎЯбсy   /LinkInfo /names /src/headerblock /src/files/c:\users\horseboy\development\projects\kinchl\build\painter-video.frag.hlsl                       "      
                 мQ3                                                                                                                                                                                                                                                                                                           џџџџw	1      ?\   L       ,   X                                    Ф      `             	 м      а                  main none   -К.ё       Ф      `                    џџџџ    Ф         џџџџ    џџџџ         C:\Users\horseboy\Development\Projects\KincHL\build\painter-video.frag.hlsl ўяўя                  џџџџџџџџџџ џџџџџџџџџџ                                                                                                                                                                        е     _  P       Э       М  L      (   8  ,   P                  
            	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             